import { ApiResponse, fetchApi } from "@/services/api";

export interface Group {
  _id: string;
  name: string;
  memo_count: number;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface CreateGroupRequest {
  name: string;
  description: string;
}

export type UpdateGroupRequest = CreateGroupRequest;

export const groupApi = {
  getAll: (): Promise<ApiResponse<Group[]>> => {
    return fetchApi("memo", "/groups");
  },

  getById: (id: string): Promise<ApiResponse<Group>> => {
    return fetchApi("memo", `/groups/${id}`);
  },

  create: (data: CreateGroupRequest): Promise<ApiResponse<Group>> => {
    return fetchApi("memo", "/groups", {
      method: "POST",
      body: data,
    });
  },

  update: (
    id: string,
    data: UpdateGroupRequest
  ): Promise<ApiResponse<Group>> => {
    return fetchApi("memo", `/groups/${id}`, {
      method: "PATCH",
      body: data,
    });
  },

  delete: (id: string): Promise<ApiResponse<Group>> => {
    return fetchApi("memo", `/groups/${id}`, {
      method: "DELETE",
    });
  },
};
