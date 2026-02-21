import { KanbanBoard } from "@/components/kanban/board";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <KanbanBoard />
    </main>
  );
}
