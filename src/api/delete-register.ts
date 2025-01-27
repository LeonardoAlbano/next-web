import { api } from '@/lib/axios'

export interface DeleteRegisterParams {
  id: string
}

export async function deleteRegister({ id }: DeleteRegisterParams) {
  const response = await api.delete(`/api/Project/${id}`)
  return response.data
}
