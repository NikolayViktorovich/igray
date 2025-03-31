import { adminApiUrl } from '@/app/config/routes/api-routes/admin'

import { axiosClassic } from '@/shared/api/config/axios'
import {
	IGetOrdersQueryParams,
	IOrdersResponse
} from '@/shared/types/orders.interface'

export const ordersService = {
	axios: axiosClassic,

	async findMany({
		page,
		limit
	}: IGetOrdersQueryParams): Promise<IOrdersResponse> {
		const queryParams = new URLSearchParams()
		queryParams.set('page', page.toString())
		queryParams.set('limit', limit.toString())

		return await this.axios
			.get(adminApiUrl.getSteamOrders(queryParams.toString()))
			.then(res => res.data)
	}
}
