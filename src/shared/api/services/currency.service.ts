import { publicApiUrl } from '@/app/config/routes/api-routes/public'

import { axiosClassic } from '@/shared/api/config/axios'
import { Currencies } from '@/shared/types/currency.interface'

export const currencyService = {
	axios: axiosClassic,

	async findOne(currency: Currencies) {
		const queryParams = new URLSearchParams()

		queryParams.set('currency', currency)

		return await this.axios
			.get(publicApiUrl.currency_rate(queryParams.toString()))
			.then(res => res.data)
	}
}
