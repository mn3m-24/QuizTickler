const fetcher = async <T>(url: string): Promise<T> =>
  (await (await fetch(url)).json()) as T;

export default fetcher;
