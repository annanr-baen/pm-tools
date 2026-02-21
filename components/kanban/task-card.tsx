"use client";

import { type Task } from "@/types/task";
import { PRIORITY_COLORS, PRIORITY_LABELS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TaskCardProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (taskId: string) => void;
}

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
    function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
        e.dataTransfer.setData("text/plain", task.id);
        e.dataTransfer.effectAllowed = "move";
    }

    return (
        <Card
            draggable
            onDragStart={handleDragStart}
            className={cn(
                "cursor-grab active:cursor-grabbing transition-all duration-200",
                "hover:shadow-md hover:-translate-y-0.5",
                "active:opacity-60 active:shadow-lg"
            )}
        >
            <CardHeader className="p-3 pb-1">
                <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-medium leading-tight line-clamp-2">
                        {task.title}
                    </h4>
                    <div className="flex shrink-0 gap-0.5">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-muted-foreground hover:text-foreground"
                            onClick={() => onEdit(task)}
                            aria-label="Edit task"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                <path d="m15 5 4 4" />
                            </svg>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-muted-foreground hover:text-destructive"
                            onClick={() => onDelete(task.id)}
                            aria-label="Delete task"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-3 pt-1">
                {task.description && (
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                        {task.description}
                    </p>
                )}
                <div className="flex items-center justify-between gap-2">
                    <Badge
                        variant="secondary"
                        className={cn(
                            "text-[10px] font-medium px-1.5 py-0",
                            PRIORITY_COLORS[task.priority]
                        )}
                    >
                        {PRIORITY_LABELS[task.priority]}
                    </Badge>
                    {task.assignee && (
                        <span className="text-[11px] text-muted-foreground truncate max-w-[100px]">
                            {task.assignee}
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
