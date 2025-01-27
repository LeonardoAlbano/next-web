'use client'

import { useEffect, useState } from 'react'

import { api } from '../../lib/axios'

export default function ExampleComponent() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/some-endpoint')
        setData(response.data)
      } catch (err) {
        setError('Erro ao buscar dados da API')
        console.error(err)
      }
    }

    fetchData()
  }, [])

  if (error) return <div>Erro: {error}</div>
  if (!data) return <div>Carregando...</div>

  return (
    <div>
      <h1>Dados da API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
