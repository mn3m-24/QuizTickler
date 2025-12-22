import { useCategories } from '@/api/use-categories';
import type { QuizSettings } from '@/types';
import { ErrorMessage } from './error-message';

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
  const { categories, isError } = useCategories();
  if (isError)
    return (
      <ErrorMessage message="something went wrong when fetching the categories" />
    );
  return (
    <form>
      <div id="qtype">
        <label htmlFor="type">Question type</label>
        <select
          id="type"
          name="type"
          defaultValue={settings.type}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              type: e.target.value as QuizSettings['type'],
            })
          }
        >
          <option value="any">Any</option>
          <option value="multiple">Multiple Choices</option>
          <option value="boolean">True/False</option>
        </select>
      </div>

      <div id="difficulty">
        <label htmlFor="difficulty">Difficulty</label>
        <select
          id="difficulty"
          name="difficulty"
          defaultValue={settings.difficulty}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              difficulty: e.target.value as QuizSettings['difficulty'],
            })
          }
        >
          <option value="any">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div id="category">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          defaultValue={settings.category}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              category: e.target.value as QuizSettings['category'],
            })
          }
        >
          <option value="any">any</option>
          {categories.map(({ id, name }) => (
            <option value={name} key={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div id="amount">
        <label htmlFor="amount">Number of questions</label>

        <select
          id="amount"
          name="amount"
          defaultValue={settings.amount}
          onChange={(e) =>
            onSettingsChange({ ...settings, amount: parseInt(e.target.value) })
          }
        >
          {[5, 10, 15, 20].map((a, i) => (
            <option value={a} key={i}>
              {a}
            </option>
          ))}
        </select>
      </div>
      {/* TODO Make submitting start the quiz with timer */}
      <button type="button" onClick={onStart} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Start Quiz'}
      </button>
    </form>
  );
};
