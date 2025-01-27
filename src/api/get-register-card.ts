import { api } from '@/lib/axios'

export async function getRegisterCard() {
  const { data } = await api.get('/api/Project')
  return data
}
