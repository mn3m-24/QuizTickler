import useSWR from 'swr';

interface CategoryResponse {
  trivia_categories: { id: number; name: string }[];
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data: CategoryResponse = await res.json();
  return data.trivia_categories;
};

export const useCategories = () => {
  const { data, error, isLoading } = useSWR(
    'https://opentdb.com/api_category.php',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    categories: data || [],
    isError: error,
    isLoading,
  };
};
