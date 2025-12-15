import data from '@/data/categories.json' with { type: 'json' };
const categories = data['trivia_categories'];

const getCategories = () => categories.map((obj) => obj.name);

export default getCategories;
