import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const handleOnClick = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);

    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={handleOnClick}
      aria-label="Toggle theme"
    >
      <Sun
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        size={24}
      />
      <Moon className="rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" size={24} />
    </Button>
  );
};
