import useTheme from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import Button from "./ui/button";

const ThemeToggle = () => {
  const [dark, toggle] = useTheme();
  return (
    <Button
      variant="secondary"
      size="sm"
      className="px-2 py-2"
      onClick={toggle}
    >
      {dark ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
