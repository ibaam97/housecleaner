export default interface ListGraphQueryResult<T> {
  [query: string]: { items: T[] };
}
