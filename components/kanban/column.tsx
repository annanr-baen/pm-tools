"use client";

import { useState } from "react";
import { type Task, type Status } from "@/types/task";
import { COLUMN_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { TaskCard } from "./task-card";

interface ColumnProps {
    id: Status;
    title: string;
    tasks: Task[];
    onDrop: (taskId: string, newStatus: Status) => void;
    onEditTask: (task: Task) => void;
    onDeleteTask: (taskId: string) => void;
}

export function Column({
    id,
    title,
    tasks,
    onDrop,
    onEditTask,
    onDeleteTask,
}: ColumnProps) {
    const [isDragOver, setIsDragOver] = useState(false);

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDragOver(true);
    }

    function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
        // Only set false if leaving the column container itself (not a child)
        const relatedTarget = e.relatedTarget as HTMLElement | null;
        if (!e.currentTarget.contains(relatedTarget)) {
            setIsDragOver(false);
        }
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDragOver(false);
        const taskId = e.dataTransfer.getData("text/plain");
        if (taskId) {
            onDrop(taskId, id);
        }
    }

    return (
        <div
            className={cn(
                "flex flex-col min-w-[280px] w-[280px] bg-muted/40 rounded-xl border-t-4 transition-colors duration-200",
                COLUMN_COLORS[id],
                isDragOver && "bg-accent/60 ring-2 ring-primary/20"
            )}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <div className="flex items-center justify-between px-4 py-3">
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5 font-medium">
                    {tasks.length}
                </span>
            </div>
            <div className="flex-1 flex flex-col gap-2 px-3 pb-3 min-h-[120px]">
                {tasks.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-xs text-muted-foreground/60 italic">
                            No tasks
                        </p>
                    </div>
                ) : (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={onEditTask}
                            onDelete={onDeleteTask}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
