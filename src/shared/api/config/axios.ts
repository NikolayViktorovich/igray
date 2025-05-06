import axios, { CreateAxiosDefaults } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://igray24back.ru'

export const axiosClassic = axios.create({
  baseURL: `${API_URL}/api/v1`,
  timeout: 10000
})
