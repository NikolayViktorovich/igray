import axios from 'axios'

export const axiosClassic = axios.create({
  timeout: 10000
})
