export interface ApiResponse {
  status: boolean;
  message?: string;
  data?: object | null;
  errors?: object | null;
}
