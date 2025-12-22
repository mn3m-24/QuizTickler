import { useCategories } from '@/api/use-categories';
import { ErrorMessage } from './error-message';
import type { ChangeEvent } from 'react';

interface CategoriesProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  category: string;
}

export const Categories = ({ onChange, category }: CategoriesProps) => {
  const { data: categories, error, isLoading } = useCategories();
  if (error)
    return (
      <ErrorMessage message="something went wrong when fetching the categories" />
    );
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div id="category">
      <label htmlFor="category">Category</label>
      <select
        disabled={isLoading}
        id="category"
        name="category"
        value={category}
        onChange={onChange}
      >
        <option value="any">any</option>
        {categories?.map(({ id, name }) => (
          <option value={name} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
