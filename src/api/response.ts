export interface Responder<T = null> {
  status: boolean;
  message: string;
  data?: T;
  errors?: object | null;
}

export interface ApiResponse<T = null> {
  status: boolean;
  message: string;
  data?: T;
}
