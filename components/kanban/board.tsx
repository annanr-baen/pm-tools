"use client";

import { useState } from "react";
import { type Task, type Status } from "@/types/task";
import { BOARD_COLUMNS } from "@/lib/constants";
import { useTasks } from "@/hooks/use-tasks";
import { Column } from "./column";
import { CreateTaskDialog } from "./create-task-dialog";
import { EditTaskDialog } from "./edit-task-dialog";
import { DeleteTaskDialog } from "./delete-task-dialog";
import { Button } from "@/components/ui/button";

export function KanbanBoard() {
    const { tasks, isLoaded, createTask, updateTask, deleteTask, moveTask, getTasksByStatus } = useTasks();
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [deletingTaskId, setDeletingTaskId] = useState<string | null>(null);

    function handleDrop(taskId: string, newStatus: Status) {
        moveTask(taskId, newStatus);
    }

    function handleEditTask(task: Task) {
        setEditingTask(task);
    }

    function handleDeleteTask(taskId: string) {
        setDeletingTaskId(taskId);
    }

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="text-muted-foreground text-sm">Loading board...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b">
                <div>
                    <h1 className="text-xl font-bold tracking-tight">Kanban Board</h1>
                    <p className="text-sm text-muted-foreground">
                        {tasks.length} {tasks.length === 1 ? "task" : "tasks"} total
                    </p>
                </div>
                <Button onClick={() => setCreateDialogOpen(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1.5"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                    Add Task
                </Button>
            </div>

            <div className="flex-1 overflow-x-auto p-6">
                <div className="flex gap-4 min-w-max">
                    {BOARD_COLUMNS.map((column) => (
                        <Column
                            key={column.id}
                            id={column.id}
                            title={column.title}
                            tasks={getTasksByStatus(column.id)}
                            onDrop={handleDrop}
                            onEditTask={handleEditTask}
                            onDeleteTask={handleDeleteTask}
                        />
                    ))}
                </div>
            </div>

            <CreateTaskDialog
                open={createDialogOpen}
                onOpenChange={setCreateDialogOpen}
                onCreateTask={createTask}
            />

            <EditTaskDialog
                task={editingTask}
                open={editingTask !== null}
                onOpenChange={(open) => {
                    if (!open) setEditingTask(null);
                }}
                onUpdateTask={updateTask}
            />

            <DeleteTaskDialog
                open={deletingTaskId !== null}
                onOpenChange={(open) => {
                    if (!open) setDeletingTaskId(null);
                }}
                onConfirm={() => {
                    if (deletingTaskId) {
                        deleteTask(deletingTaskId);
                        setDeletingTaskId(null);
                    }
                }}
            />
        </div>
    );
}
