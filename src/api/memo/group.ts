import { ApiResponse, Responder } from "@/api/response";

export interface Group {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  description: string;
  memo_number: number;
}

export interface CreateGroupRequest {
  name: string;
  description: string;
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

export async function create_group(
  request: CreateGroupRequest
): Promise<ApiResponse<null>> {
  try {
    const response = await fetch("http://localhost:3000/api/memo/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    const resp: Responder<Group> = await response.json();
    return {
      status: resp.status,
      message: resp.message || "Success",
      data: null, // 返回创建的 group 数据
    };
  } catch (error) {
    return {
      status: false,
      message: error instanceof Error ? error.message : "Unknown error",
      data: null,
    };
  }
}

// 添加 delete_group 函数
export async function delete_group(id: number): Promise<ApiResponse<null>> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/memo/groups/${id}`,
      {
        method: "DELETE",
      }
    );

    const resp: Responder<Group> = await response.json();
    return {
      status: resp.status,
      message: resp.message || "Successfully deleted",
      data: null,
    };
  } catch (error) {
    return {
      status: false,
      message:
        error instanceof Error ? error.message : "Failed to delete group",
      data: null,
    };
  }
}

export interface UpdateGroupRequest {
  name: string;
  description: string;
}

export async function update_group(
  id: number,
  request: UpdateGroupRequest
): Promise<ApiResponse<null>> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/memo/groups/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    );

    const resp: Responder<Group> = await response.json();
    return {
      status: resp.status,
      message: resp.message || "Successfully updated",
      data: null,
    };
  } catch (error) {
    return {
      status: false,
      message:
        error instanceof Error ? error.message : "Failed to update group",
      data: null,
    };
  }
}
