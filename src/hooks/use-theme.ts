import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  const setTheme = (dark: boolean) => {
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  useEffect(() => {
    const abortController = new AbortController();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    mq.addEventListener("change", (e) => setTheme(e.matches), {
      signal: abortController.signal,
    });
    return () => abortController.abort();
  }, []);

  const toggle = () => setTheme(!isDark);

  if (localStorage.getItem("theme") === "light" && isDark) {
    setTheme(false);
    document.documentElement.classList.remove("dark");
  }

  return [isDark, toggle] as const;
};

export default useTheme;
