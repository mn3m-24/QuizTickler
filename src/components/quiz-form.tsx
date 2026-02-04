import type { QuizSettings } from "@/types/quiz";
import { Categories } from "./categories";

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
      onSubmit={(e) => {
        e.preventDefault();
        onStart();
      }}
    >
      <p>Type:</p>
      <div className="question-type">
        {QUESTION_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => updateSettings("type", type)}
            style={settings.type === type ? { backgroundColor: "blue" } : {}}
          >
            {type}
          </button>
        ))}
        <output>{settings.type}</output>
      </div>

      <p>Difficulty:</p>
      <div className="difficulty">
        {QUESTION_DIFFICULTY.map((difficulty) => (
          <button
            key={difficulty}
            type="button"
            onClick={() => updateSettings("difficulty", difficulty)}
            style={
              settings.difficulty === difficulty
                ? { backgroundColor: "blue" }
                : {}
            }
          >
            {difficulty}
          </button>
        ))}
        <output>{settings.difficulty}</output>
      </div>

      <Categories
        onSelect={(id: string) => updateSettings("category", id)}
        selectedCategory={settings.category}
      />

      <div className="amount">
        <label htmlFor="amount">Number of questions</label>

        <input
          type="range"
          min={1}
          max={50}
          value={settings.amount}
          onChange={(e) => updateSettings("amount", parseInt(e.target.value))}
        />
        <output>{settings.amount}</output>
      </div>
      {/* TODO Make submitting start the quiz with timer */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Start Quiz"}
      </button>
    </form>
  );
};
