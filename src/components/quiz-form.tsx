import type { QuizSettings } from "@/types/quiz";
import { Categories } from "./categories";
import Button from "./ui/button";
import cn from "@/utils/cn";

const QUESTION_TYPES = ["boolean", "multiple"] as const;
const QUESTION_DIFFICULTY = ["easy", "medium", "hard"] as const;

interface QuizFormProps {
  settings: QuizSettings;
  onSettingsChange: (settings: QuizSettings) => void;
  onStart: () => void;
  isLoading: boolean;
}

export const QuizForm = ({
  settings,
  onSettingsChange,
  onStart,
  isLoading,
}: QuizFormProps) => {
  const updateSettings = <k extends keyof QuizSettings>(
    key: k,
    value: QuizSettings[k]
  ) =>
    onSettingsChange({
      ...settings,
      [key]: settings[key] === value ? null : value,
    });

  return (
    <form
      className="flex flex-col items-center justify-around gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        onStart();
      }}
    >
      <section className="flex flex-col items-center gap-4">
        <h2>Types</h2>
        <div className="flex gap-4">
          {QUESTION_TYPES.map((type) => (
            <Button
              variant="secondary"
              key={type}
              type="button"
              onClick={() => updateSettings("type", type)}
              className={cn({
                "bg-blue-500": type == settings.type,
              })}
            >
              {type}
            </Button>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-4">
        <h2>Difficulty</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {QUESTION_DIFFICULTY.map((difficulty) => (
            <Button
              variant="secondary"
              key={difficulty}
              type="button"
              onClick={() => updateSettings("difficulty", difficulty)}
              className={cn({
                "bg-blue-500": difficulty == settings.difficulty,
              })}
            >
              {difficulty}
            </Button>
          ))}
        </div>
      </section>

      <Categories
        onSelect={(id: string) => updateSettings("category", id)}
        selectedCategory={settings.category}
      />

      <section className="w-full flex flex-col items-center px-4">
        <div className="flex justify-between w-full text-xl">
          <h3>number of questions</h3>
          <h3>{settings.amount}</h3>
        </div>
        <input
          className="w-full"
          type="range"
          min={1}
          max={50}
          value={settings.amount}
          onChange={(e) => updateSettings("amount", parseInt(e.target.value))}
        />
      </section>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Start Quiz"}
      </Button>
    </form>
  );
};
