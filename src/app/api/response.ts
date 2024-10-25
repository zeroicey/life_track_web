export interface Responder {
  status: boolean;
  message: string;
  data?: object | null;
  errors?: object | null;
}
