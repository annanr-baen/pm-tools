export type Status = "backlog" | "todo" | "in-progress" | "done";

export type Priority = "low" | "medium" | "high" | "urgent";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  assignee: string;
  createdAt: string;
  updatedAt: string;
}

export interface BoardColumn {
  id: Status;
  title: string;
}
