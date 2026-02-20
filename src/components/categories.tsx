import { useCategories } from "@/api/use-categories";
import Button from "./ui/button";
import cn from "@/utils/cn";
import Skeleton from "./ui/skeleton";
import { toast } from "sonner";

interface CategoriesProp {
  onSelect: (id: string) => void;
  selectedCategory: string | null;
}

export const Categories = ({ onSelect, selectedCategory }: CategoriesProp) => {
  const { data: categories, error, isLoading } = useCategories();
  // TODO use a better error component
  if (error) toast.error("Error fetching categories");
  return (
    <section className="flex flex-col items-center gap-4">
      <h2>Category</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {isLoading
          ? (Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} className="h-9 w-32" aria-hidden="true" />))
          : categories?.map(({ id, name }) => (
          <Button
            variant="secondary"
            size="sm"
            className={cn({
              "bg-blue-500": selectedCategory === id.toString(),
            })}
            type="button"
            key={id}
            onClick={() => onSelect(id.toString())}
            value={id}
          >
            {name}
          </Button>
        ))}
      </div>
    </section>
  );
};
