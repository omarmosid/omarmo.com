"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconButton } from "./buttons/IconButton";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <IconButton
          icon={Moon}
          size="large"
          onClick={() => setTheme("light")}
        />
      ) : (
        <IconButton icon={Sun} size="large" onClick={() => setTheme("dark")} />
      )}
    </>
  );
};

export { ThemeSwitch };
