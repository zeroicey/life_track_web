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

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export type ApiModule = "memo" | "task" | "article" | "collect" | "habit";

export async function fetchApi<T = any, R = any>(
  module: ApiModule,
  endpoint: string,
  options?: {
    method?: string;
    body?: T;
  }
): Promise<ApiResponse<R>> {
  try {
    const response = await fetch(`${API_BASE_URL}/${module}${endpoint}`, {
      method: options?.method || "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: options?.body ? JSON.stringify(options.body) : undefined,
    });

    const data: Responder<R> = await response.json();
    return {
      status: data.status,
      message: data.message,
      data: data.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error instanceof Error ? error.message : "Network error",
      data: undefined,
    };
  }
}
