'use client';

import KanbanColumn from "./KanbanColumn";
import { DragDropProvider } from "@dnd-kit/react";
import { useState } from "react";
import { move } from "@dnd-kit/helpers"

interface KanbanColumn {
    id: string | number;
    items: {
        id: string | number;
        content? : string;
    }
}

function KanbanBoard() {
    const [items, setItems] = useState({
        backlog: [
            { id: "task-1", content: "Task 1"},
            { id: "task-2", content: "Task 2"}
        ],
        todo: [
            { id: "task-3", content: "Task 3"},
            { id: "task-4", content: "Task 4"}
        ],
        inProgress: [],
        done: []
    });

    const columns = Object.entries(items)

    return <DragDropProvider
         onDragOver={(event) => {
            setItems((items) => move(items, event));
         }}
    >

        <div className="flex h-full gap-4 p-4 overflow-auto">
            {columns.map(([column, items]) => <KanbanColumn key={column} id={column} items={items} />)}
        </div>

    </DragDropProvider>
    
}

export default KanbanBoard;