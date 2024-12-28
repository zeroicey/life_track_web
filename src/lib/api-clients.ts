import type { ApiResponse } from "@/lib/types/api";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public errors?: Record<string, any> | null
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiClient<T = any>(
  endpoint: string,
  options: {
    method?: string;
    body?: T;
  } = {}
): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: options.method || "GET",
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    const data: ApiResponse = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.message || "Request failed",
        response.status,
        data.errors || undefined
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error instanceof Error ? error.message : "Network error",
      500
    );
  }
}
