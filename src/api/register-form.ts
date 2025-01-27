import { api } from '@/lib/axios'

export interface RegisterFormBody {
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

export async function registerForm(body: RegisterFormBody) {
  const { data } = await api.post('/api/Project', body)
  return data
}
