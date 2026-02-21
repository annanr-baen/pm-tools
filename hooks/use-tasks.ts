"use client";

import { useState, useEffect, useCallback } from "react";
import { type Task, type Status, type Priority } from "@/types/task";
import { STORAGE_KEY } from "@/lib/constants";

function loadTasks(): Task[] {
    if (typeof window === "undefined") return [];
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

function saveTasks(tasks: Task[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
        console.error("Failed to save tasks to localStorage");
    }
}

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        setTasks(loadTasks());
        setIsLoaded(true);
    }, []);

    // Persist to localStorage on change
    useEffect(() => {
        if (isLoaded) {
            saveTasks(tasks);
        }
    }, [tasks, isLoaded]);

    const createTask = useCallback(
        (data: {
            title: string;
            description?: string;
            priority?: Priority;
            assignee?: string;
        }) => {
            const now = new Date().toISOString();
            const newTask: Task = {
                id: crypto.randomUUID(),
                title: data.title,
                description: data.description || "",
                status: "backlog",
                priority: data.priority || "medium",
                assignee: data.assignee || "",
                createdAt: now,
                updatedAt: now,
            };
            setTasks((prev) => [...prev, newTask]);
            return newTask;
        },
        []
    );

    const updateTask = useCallback(
        (
            id: string,
            data: Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>
        ) => {
            setTasks((prev) =>
                prev.map((task) =>
                    task.id === id
                        ? { ...task, ...data, updatedAt: new Date().toISOString() }
                        : task
                )
            );
        },
        []
    );

    const deleteTask = useCallback((id: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }, []);

    const moveTask = useCallback((id: string, newStatus: Status) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, status: newStatus, updatedAt: new Date().toISOString() }
                    : task
            )
        );
    }, []);

    const getTasksByStatus = useCallback(
        (status: Status) => {
            return tasks.filter((task) => task.status === status);
        },
        [tasks]
    );

    return {
        tasks,
        isLoaded,
        createTask,
        updateTask,
        deleteTask,
        moveTask,
        getTasksByStatus,
    };
}
