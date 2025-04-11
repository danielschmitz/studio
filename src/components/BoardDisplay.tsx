"use client";

import { Board } from "@/components/Board";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface BoardProps {
  id: string;
  title: string;
  tasks: Task[];
}

interface BoardDisplayProps {
  boards: BoardProps[];
  onAddTask: (boardId: string, taskText: string) => void;
  onCompleteTask: (boardId: string, taskId: string) => void;
}

export const BoardDisplay: React.FC<BoardDisplayProps> = ({
  boards,
  onAddTask,
  onCompleteTask,
}) => {
  return (
    <div className="container mx-auto py-8 flex flex-wrap gap-4 justify-center">
      {boards.map((board) => (
        <Board
          key={board.id}
          board={board}
          onAddTask={onAddTask}
          onCompleteTask={onCompleteTask}
        />
      ))}
    </div>
  );
};
