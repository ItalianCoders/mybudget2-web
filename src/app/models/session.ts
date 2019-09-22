export interface Session {
  userInfo: User;
  locale: string;
  environment: string;
  accessToken: string;
  refreshToken: string;
}

interface User {
  username: string;
  email: string;
  roles: UserRole;
}

enum UserRole {
  VIEW_BUDGET,
  DELETE_EXPENSE,
  ADD_EXPENSE
}
