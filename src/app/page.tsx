"use client";

import { useState } from "react";
import { BoardDisplay } from "@/components/BoardDisplay";
import { TopBar } from "@/components/TopBar";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface Board {
  id: string;
  title: string;
  tasks: Task[];
}

export default function Home() {
  const [boards, setBoards] = useState<Board[]>([
    {
      id: "board-1",
      title: "Sample Board",
      tasks: [
        { id: "task-1", text: "Sample Task 1", completed: false },
        { id: "task-2", text: "Sample Task 2", completed: true },
      ],
    },
  ]);

  const handleAddTask = (boardId: string, taskText: string) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === boardId
          ? {
              ...board,
              tasks: [
                ...board.tasks,
                {
                  id: `task-${Date.now()}`,
                  text: taskText,
                  completed: false,
                },
              ],
            }
          : board
      )
    );
  };

  const handleCompleteTask = (boardId: string, taskId: string) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === boardId
          ? {
              ...board,
              tasks: board.tasks
                .map((task) =>
                  task.id === taskId ? { ...task, completed: !task.completed } : task
                )
                .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)),
            }
          : board
      )
    );
  };

  const handleAddBoard = () => {
    const newBoardId = `board-${Date.now()}`;
    setBoards((prevBoards) => [
      ...prevBoards,
      { id: newBoardId, title: "New Board", tasks: [] },
    ]);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar onAddBoard={handleAddBoard} />
      <BoardDisplay
        boards={boards}
        onAddTask={handleAddTask}
        onCompleteTask={handleCompleteTask}
      />
    </div>
  );
}
