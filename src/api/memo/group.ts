import { ApiResponse, Responder } from "@/api/response";

export interface Group {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  description: string;
  memo_number: number;
}

export async function get_all_groups(): Promise<ApiResponse<Group[]>> {
  try {
    const response = await fetch("http://localhost:3000/api/memo/groups");
    const resp: Responder<Group[]> = await response.json();
    return {
      status: true,
      message: resp.message,
      data: resp.data,
    };
  } catch (error) {
    return {
      status: false,
      message: "Failed to fetch groups",
    };
  }
}
