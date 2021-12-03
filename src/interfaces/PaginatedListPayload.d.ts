export interface PaginatedListPayload {
  limit?: number;
  page?: number;
  sortBy?: string;
  orderBy?: "ASC" | "DESC";
  query?: string;
  [filter: string]: any;
}
