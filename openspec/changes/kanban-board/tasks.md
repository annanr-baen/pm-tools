## 1. Foundation & Setup

- [x] 1.1 [FE] Inisialisasi shadcn/ui — jalankan `npx shadcn@latest init` dengan konfigurasi Tailwind CSS v4 + path alias `@/*`
- [x] 1.2 [FE] Install komponen shadcn/ui — Button, Card, Dialog, Input, Select, Badge, Label, Textarea
- [x] 1.3 [FE] Membuat file `lib/utils.ts` dengan helper `cn()` untuk menggabungkan class Tailwind
- [x] 1.4 [FE] Membuat definisi tipe TypeScript di `types/task.ts` — interface `Task`, `Status`, `Priority`, dan `BoardColumn`

## 2. Data Layer

- [x] 2.1 [BE] Membuat `lib/constants.ts` — mendefinisikan `BOARD_STATUSES`, `PRIORITIES`, dan konfigurasi warna kolom
- [x] 2.2 [BE] Membuat custom hook `hooks/use-tasks.ts` — implementasi operasi CRUD dengan integrasi persistence `localStorage` sebagai database lokal

## 3. Kanban Board Components

- [x] 3.1 [FE] Membuat komponen `components/kanban/task-card.tsx` — card yang dapat di-drag menampilkan judul, badge prioritas, assigne, dan action buttons
- [x] 3.2 [FE] Membuat komponen `components/kanban/column.tsx` — kolom status dengan drop zone dan indikator visual saat cursor melakukan drag-over
- [x] 3.3 [FE] Membuat komponen utama `components/kanban/board.tsx` — container yang me-render keempat kolom horizontal dengan overflow-x scroll

## 4. Task CRUD UI

- [x] 4.1 [FE] Membuat komponen `components/kanban/create-task-dialog.tsx` — dialog form untuk menambah task baru ke kolom Backlog
- [x] 4.2 [FE] Membuat komponen `components/kanban/edit-task-dialog.tsx` — dialog form pre-filled untuk mengedit task yang ada
- [x] 4.3 [FE] Menambahkan fungsi hapus task dengan confirmation window/alert khusus dari shadcn

## 5. Page Integration

- [x] 5.1 [FE] Update file `app/page.tsx` — mengganti konten default Next.js dengan merender `KanbanBoard`
- [x] 5.2 [FE] Update file `app/layout.tsx` — mengatur title page "PM Tools" dan konfigurasi tema font global
- [x] 5.3 [FE] Update file `app/globals.css` — penyesuaian CSS variables khusus untuk theming shadcn/ui (warna primary, background, dst)

## 6. Polish & Verification

- [x] 6.1 [FE] Menguji fungsionalitas drag-and-drop antar semua kolom status
- [x] 6.2 [FE] Menguji fungsionalitas operasi CRUD task dan sinkronisasi `localStorage`
- [x] 6.3 [FE] Verifikasi layout yang responsif untuk berbagai ukuran resolusi device
- [x] 6.4 [FE] Evaluasi dan verifikasi *visual polish* — feedback status drag, highlight target kolom, dan animasi transisi halus
