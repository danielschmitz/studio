"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface TopBarProps {
  onAddBoard: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onAddBoard }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(document.documentElement.classList.contains("dark"));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-secondary dark:bg-background text-secondary-foreground dark:text-foreground p-4 flex items-center justify-between rounded-md shadow-md">
      <span className="text-lg font-bold">Todo Keep</span>
      <div className="flex items-center space-x-4">
        <button
          onClick={onAddBoard}
          className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm hover:bg-primary/80"
        >
          Add Board
        </button>
        <Switch
          id="dark-mode-toggle"
          checked={darkMode}
          onCheckedChange={toggleDarkMode}
        />
      </div>
    </div>
  );
};
