import { Zap } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const Header = () => (
// <header className="flex justify-between items-center p-6 shadow bg-background">
  <header className="sticky z-50 top-0 h-16 bg-background/10 backdrop-blur-2xl flex justify-between items-center p-6 shadow">
    <div className="inline-flex gap-2 justify-center items-center">
      <span className="rounded-4xl bg-secondary p-2">
        <Zap className="fill-primary "/>
      </span>
      <span className="text-3xl font-extrabold">QuizTickler</span>
    </div>
    <div className="flex gap-4">
      <ThemeToggle />
      <a className="px-2 py-2 rounded bg-secondary cursor-pointer transition hover:brightness-90">
        <svg className="lucide lucide-github-icon lucide-github fill-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      </a>
    </div>
  </header>
);

export default Header;
