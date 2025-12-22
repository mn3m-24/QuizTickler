import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

interface CategoryResponse {
  trivia_categories: { id: number; name: string }[];
}

const getCategories = async (url: string) => {
  const data = await fetcher<CategoryResponse>(url);
  return data.trivia_categories;
};

export const useCategories = () => {
  return useSWR('https://opentdb.com/api_category.php', getCategories, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
};
