export interface GetResponse {
  data: GetData | null | [];
  message: string | null;
  code: number | null;
  error: string | null;
}

export interface GetData {
  snapshots: GetList | [];
  pagination: GetPagination | null;
}

export interface GetList {
  [index: number]: {
    description: string | null;
    id: number | null;
    name: string | null;
  };
}

export interface GetPagination {
  total: number;
  total_page: number;
  current_page: number;
}

export interface GetFilter {
  page: number;
  limit: number;
  name: string;
}
