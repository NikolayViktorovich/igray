import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://igray24back.ru'

export const axiosClassic = axios.create({
  timeout: 10000
})
