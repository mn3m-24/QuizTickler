import type { QuizSettings } from '@/types/quiz';
import { Categories } from './categories';

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
  ) => onSettingsChange({ ...settings, [key]: value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onStart();
      }}
    >
      <div className="question-type">
        <label htmlFor="question-type">Question type</label>
        <select
          id="question-type"
          value={settings.type}
          onChange={(e) => updateSettings('type', e.target.value)}
        >
          <option value="any">Any</option>
          <option value="multiple">Multiple Choices</option>
          <option value="boolean">True/False</option>
        </select>
      </div>

      <div className="difficulty">
        <label htmlFor="difficulty">Difficulty</label>
        <select
          id="difficulty"
          value={settings.difficulty}
          onChange={(e) => updateSettings('difficulty', e.target.value)}
        >
          <option value="any">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <Categories
        onChange={(e) => updateSettings('category', e.target.value)}
        category={settings.category}
      />
      <div className="amount">
        <label htmlFor="amount">Number of questions</label>

        <select
          id="amount"
          value={settings.amount}
          onChange={(e) => updateSettings('amount', parseInt(e.target.value))}
        >
          {[5, 10, 15, 20].map((a, i) => (
            <option value={a} key={i}>
              {a}
            </option>
          ))}
        </select>
      </div>
      {/* TODO Make submitting start the quiz with timer */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Start Quiz'}
      </button>
    </form>
  );
};
