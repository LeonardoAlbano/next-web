import { api } from '@/lib/axios'

export async function getRegisterForm() {
  const { data } = await api.get('/api/Project')
  return data
}
