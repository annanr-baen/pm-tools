## Context

PM Tools adalah project baru — saat ini hanya berisi scaffolding Next.js 16 default (App Router) dengan Tailwind CSS v4 dan belum ada fitur apapun. Kita perlu membangun Kanban board dari nol sebagai fitur utama pertama.

**Current state**: Empty Next.js app dengan `app/page.tsx` default, `app/globals.css` dengan Tailwind v4 setup, dan konfigurasi dasar TypeScript/ESLint.

**Constraints**:
- Monolith architecture — semua code dalam satu Next.js app
- Tailwind CSS v4 + shadcn/ui untuk styling dan components
- Data persistence menggunakan localStorage terlebih dahulu (no backend database yet)
- Harus mendukung drag-and-drop antar kolom

## Goals / Non-Goals

**Goals:**
- Membangun Kanban board yang fungsional dengan 4 kolom status
- Implementasi drag-and-drop yang smooth menggunakan native HTML5 DnD API
- CRUD operations untuk tasks (create, edit, delete)
- Data persistence via localStorage
- UI yang responsif dan modern menggunakan shadcn/ui + Tailwind CSS v4
- Clean architecture dengan separation of concerns (types, hooks, components, lib)

**Non-Goals:**
- Backend database / API — localStorage is sufficient for v1
- Authentication / multi-user support
- Multi-board / multi-project
- Real-time collaboration
- Mobile native drag-and-drop (touch events) — desktop-first

## Decisions

### 1. Native HTML5 Drag and Drop API vs @dnd-kit

**Decision**: Menggunakan native HTML5 Drag and Drop API.

**Rationale**: Untuk project sederhana ini, native HTML5 DnD sudah cukup. Menghindari dependency tambahan dan menjaga bundle size tetap kecil. HTML5 DnD API didukung di semua browser modern.

**Alternatives considered**:
- `@dnd-kit`: Library yang powerful dan accessible, tapi menambah dependency ~30KB+ dan complexity yang belum diperlukan untuk scope ini
- `react-beautiful-dnd`: Deprecated, tidak cocok untuk project baru

### 2. Data Layer: localStorage dengan React state

**Decision**: Menggunakan React `useState` + `localStorage` sebagai data persistence layer.

**Rationale**: Paling sederhana untuk v1, tidak perlu backend setup. Data tersimpan di browser user. Custom hook `useTasks` akan meng-encapsulate semua logic CRUD + persistence.

**Alternatives considered**:
- SQLite + Prisma: Overkill untuk v1, menambah complexity setup
- JSON file: Tidak praktis di Next.js tanpa API route khusus
- Zustand/Jotai: State management library — bisa ditambahkan nanti jika complexity bertambah

### 3. Component Architecture

**Decision**: Komponen terpisah per concern di `components/kanban/`:

```
components/
  kanban/
    board.tsx          # KanbanBoard — container utama, manages columns
    column.tsx         # BoardColumn — satu kolom status, drop target
    task-card.tsx      # TaskCard — card individual, draggable
    create-task-dialog.tsx  # Dialog untuk membuat task baru
    edit-task-dialog.tsx    # Dialog untuk mengedit task
```

**Rationale**: Separation of concerns — setiap komponen punya satu tanggung jawab. Mengikuti shadcn/ui pattern di mana components compose UI primitives.

### 4. Task Data Model

**Decision**: Interface TypeScript sederhana:

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;      // "backlog" | "todo" | "in-progress" | "done"
  priority: Priority;  // "low" | "medium" | "high" | "urgent"
  assignee: string;
  createdAt: string;   // ISO date string
  updatedAt: string;   // ISO date string
}
```

**Rationale**: Field yang cukup untuk MVP tanpa over-engineering. `id` menggunakan `crypto.randomUUID()`. Timestamps sebagai ISO string untuk mudah serialize ke localStorage.

### 5. Page Structure

**Decision**: Menggunakan `app/page.tsx` langsung sebagai halaman utama board (bukan route group).

**Rationale**: Hanya ada satu halaman untuk v1. Route group `(dashboard)` bisa ditambahkan nanti ketika ada multiple pages.

## Risks / Trade-offs

- **localStorage limit (~5MB)** → Cukup untuk ratusan task. Jika perlu scale, migrasi ke database.
- **No mobile DnD support** → HTML5 DnD tidak bekerja well di touch devices. Mitigasi: tambahkan touch event support atau `@dnd-kit` di iterasi berikutnya.
- **No real-time sync** → Data hanya di satu browser. Mitigasi: acceptable untuk v1, tambahkan backend sync later.
- **No optimistic updates** → Karena localStorage synchronous, tidak perlu optimistic updates pattern.
