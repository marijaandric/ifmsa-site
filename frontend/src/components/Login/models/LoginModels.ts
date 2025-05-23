export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginProps {
  onSuccess?: () => void;
}
