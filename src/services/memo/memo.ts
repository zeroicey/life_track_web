import { ApiResponse, fetchApi } from "@/services/api";

export interface Memo {
  _id: string;
  group_id: string;
  text: string;
  attach: string[];
  created_at: string;
  updated_at: string;
}

export interface CreateMemoRequest {
  text: string;
  group_id: string;
  attach?: string[];
}

export type UpdateMemoRequest = CreateMemoRequest;

export const memoApi = {
  getAll: (): Promise<ApiResponse<Memo[]>> => {
    return fetchApi('memo', '/memos');
  },

  getById: (id: string): Promise<ApiResponse<Memo>> => {
    return fetchApi('memo', `/memos/${id}`);
  },

  create: (data: CreateMemoRequest): Promise<ApiResponse<Memo>> => {
    return fetchApi('memo', '/memos', {
      method: 'POST',
      body: data,
    });
  },

  update: (id: string, data: UpdateMemoRequest): Promise<ApiResponse<Memo>> => {
    return fetchApi('memo', `/memos/${id}`, {
      method: 'PATCH',
      body: data,
    });
  },

  delete: (id: string, group_id: string): Promise<ApiResponse<void>> => {
    return fetchApi('memo', `/memos/${id}?group_id=${group_id}`, {
      method: 'DELETE',
    });
  },

  getByGroupId: (groupId: string): Promise<ApiResponse<Memo[]>> => {
    return fetchApi('memo', `/memos?group_id=${groupId}`);
  },
};
