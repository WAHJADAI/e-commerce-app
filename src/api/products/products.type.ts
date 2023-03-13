export type Products = {
  data?: ProductData[];
};

export type ProductData = {
  id?: number;
  name?: string;
  desc?: string;
  isNew?: boolean;
  price?: number;
  stock?: number;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  slug?: null;
  img?: Img;
  categories?: Category;
};

export type Category = {
  id?: number;
  title?: string;
  desc?: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
};

export type Img = {
  id?: number;
  name?: string;
  alternativeText?: null;
  caption?: null;
  width?: number;
  height?: number;
  formats?: Formats;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: null;
  provider?: string;
  provider_metadata?: ProviderMetadata;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Formats = {
  small?: Small;
  thumbnail?: Small;
};

export type Small = {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: null;
  size?: number;
  width?: number;
  height?: number;
  provider_metadata?: ProviderMetadata;
};

export type ProviderMetadata = {
  public_id?: string;
  resource_type?: string;
};
