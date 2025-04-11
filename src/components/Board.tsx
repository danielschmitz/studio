"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface BoardProps {
  board: {
    id: string;
    title: string;
    tasks: Task[];
  };
  onAddTask: (boardId: string, taskText: string) => void;
  onCompleteTask: (boardId: string, taskId: string) => void;
}

export const Board: React.FC<BoardProps> = ({ board, onAddTask, onCompleteTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      onAddTask(board.id, newTaskText);
      setNewTaskText("");
    }
  };

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>{board.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {board.tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-2">
              <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => onCompleteTask(board.id, task.id)}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={cn(
                  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  task.completed ? "line-through text-muted-foreground" : ""
                )}
              >
                {task.text}
              </label>
            </div>
          ))}
        </div>
        <div className="flex space-x-2 mt-4">
          <Input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
          />
          <button
            onClick={handleAddTask}
            className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm hover:bg-primary/80"
          >
            Add
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
