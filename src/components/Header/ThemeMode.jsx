"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const lightThemeHandler = () => setTheme("light");
  const darkThemeHandler = () => setTheme("dark");

  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="cursor-pointer hover:text-amber-400"
          onClick={lightThemeHandler}
        />
      ) : (
        <MdDarkMode
          className="cursor-pointer hover:text-cyan-400"
          onClick={darkThemeHandler}
        />
      )}
    </div>
  );
}
