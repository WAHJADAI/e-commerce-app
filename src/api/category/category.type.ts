export type Category = {
  data?: CategoryData[];
  meta?: Meta;
};

export type CategoryData = {
  id?: number;
  title?: string;
  desc?: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type Meta = {
  pagination?: Pagination;
};

export type Pagination = {
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
};
