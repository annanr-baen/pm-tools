## Why

Tim membutuhkan tools sederhana untuk mengelola task secara visual menggunakan Kanban board. Saat ini belum ada sistem yang memudahkan tracking status pekerjaan (Backlog → Todo → In Progress → Done) dengan cara drag-and-drop yang intuitif. Tool ini akan meningkatkan visibility dan kolaborasi tim terhadap progress pekerjaan.

## What Changes

- **Kanban board UI** — Halaman utama menampilkan 4 kolom status (Backlog, Todo, In Progress, Done) dengan task cards di dalamnya
- **Task management** — CRUD operations untuk Task (create, read, update, delete) dengan field: title, description, status, priority, assignee
- **Drag-and-drop** — Task dapat dipindahkan antar kolom untuk mengubah status secara real-time menggunakan HTML5 Drag and Drop API
- **Data persistence** — Task disimpan menggunakan local storage sebagai initial data layer (dapat di-upgrade ke database di masa depan)

## Non-goals

- Authentication/authorization — tidak ada user login pada tahap ini
- Multi-project/multi-board support — hanya satu board tunggal
- Real-time collaboration (WebSocket) — perubahan hanya terlihat di browser yang sama
- Activity log / audit trail
- File attachments pada task
- Notifikasi atau email

## Capabilities

### New Capabilities
- `kanban-board`: Kanban board layout dengan 4 kolom status (Backlog, Todo, In Progress, Done), termasuk rendering board dan columns
- `task-management`: CRUD operations untuk Task entity — create, edit, delete task dengan field title, description, status, priority, dan assignee
- `drag-and-drop`: Drag-and-drop interaksi untuk memindahkan task antar kolom status menggunakan HTML5 Drag and Drop API

### Modified Capabilities
_None — ini adalah project baru, belum ada existing specs._

## Impact

- **New pages**: Halaman dashboard utama (`app/page.tsx` atau `app/(dashboard)/page.tsx`) untuk menampilkan Kanban board
- **New components**: `components/kanban/` — Board, Column, TaskCard, CreateTaskDialog, EditTaskDialog
- **New UI primitives**: shadcn/ui components (Button, Card, Dialog, Input, Select, Badge) perlu di-install
- **New types**: `types/` — Task, BoardColumn, Priority, Status type definitions
- **New hooks**: `hooks/` — useTasks, useDragAndDrop custom hooks
- **New lib**: `lib/` — task storage utilities, constants (BOARD_STATUSES, PRIORITIES)
- **Dependencies**: Mungkin memerlukan `@dnd-kit` atau menggunakan native HTML5 Drag and Drop API
