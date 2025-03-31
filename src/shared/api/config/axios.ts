import axios, { CreateAxiosDefaults } from 'axios'

const axiosOptions: CreateAxiosDefaults = {
	baseURL: process.env.SERVER_URL as string,
	headers: {
		'Content-Type': 'application/json'
	}
}

export const axiosClassic = axios.create(axiosOptions)
