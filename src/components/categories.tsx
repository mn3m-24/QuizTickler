import { useCategories } from "@/api/use-categories";

interface CategoriesProp {
  onSelect: (id: string) => void;
  selectedCategory: string | null;
}
export const Categories = ({ onSelect, selectedCategory }: CategoriesProp) => {
  const { data: categories, error, isLoading } = useCategories();
  if (error) return <h1>error from categories.tsx</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="category">
      <label>Category</label>
      {categories?.map(({ id, name }) => (
        <button
          type="button"
          key={id}
          onClick={() => onSelect(id.toString())}
          value={id}
          style={
            selectedCategory
              ? selectedCategory === id.toString()
                ? { backgroundColor: "blue" }
                : {}
              : {}
          }
        >
          {name}
        </button>
      ))}
      <output>{selectedCategory}</output>
    </div>
  );
};
