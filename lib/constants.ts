import { type BoardColumn, type Priority, type Status } from "@/types/task";

export const BOARD_STATUSES: Status[] = [
  "backlog",
  "todo",
  "in-progress",
  "done",
];

export const BOARD_COLUMNS: BoardColumn[] = [
  { id: "backlog", title: "Backlog" },
  { id: "todo", title: "Todo" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

export const PRIORITIES: Priority[] = ["low", "medium", "high", "urgent"];

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  urgent: "Urgent",
};

export const PRIORITY_COLORS: Record<Priority, string> = {
  low: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  medium: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  high: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  urgent: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export const COLUMN_COLORS: Record<Status, string> = {
  backlog: "border-t-zinc-400",
  todo: "border-t-blue-500",
  "in-progress": "border-t-amber-500",
  done: "border-t-emerald-500",
};

export const STORAGE_KEY = "pm-tools-tasks";
