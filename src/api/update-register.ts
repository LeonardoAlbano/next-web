import { api } from '@/lib/axios'

export interface UpdateRegisterBody {
  id: string
  title: string
  description: string
  projectUrl: string
  language: string
  category: string
  images?: string[]
  technicalDetails?: string
  statistics?: string
  documentation?: string
}

export async function updateRegister(body: UpdateRegisterBody) {
  const { id, ...data } = body
  try {
    const response = await api.put(`/api/Project/${id}`, data)
    return response.data
  } catch (error) {
    console.error('Error updating project:', error)
    throw error
  }
}
