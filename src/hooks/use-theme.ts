import { useState } from "react";

const useTheme = () => {
  const [dark, setDark] = useState<boolean>(() =>
    document.documentElement.classList.contains("dark")
  );
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }
  return [dark, toggle] as const;
};

export default useTheme;
