export interface SignUpResponseType {
  user?: UserType;
  jwt?: string;
}

export interface UserType {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
