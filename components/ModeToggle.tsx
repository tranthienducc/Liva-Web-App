"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative w-8 h-8 flex items-center justify-center"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform transform rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 transition-transform transform rotate-0 scale-100" />
      )}
    </button>
  );
};

export default ModeToggle;
