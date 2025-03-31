import { publicApiUrl } from '@/app/config/routes/api-routes/public'

import { axiosClassic } from '@/shared/api/config/axios'
import {
	IPayment,
	IPaymentResponse,
	IPromoResponse
} from '@/shared/types/steam.inerface'

export const steamService = {
	axios: axiosClassic,

	async checkPromo(promo: string): Promise<IPromoResponse> {
		const res = (
			await this.axios.post(publicApiUrl.steamCheckPromo(), { promo })
		).data

		return res
	},

	async pay(payload: IPayment): Promise<IPaymentResponse> {
		return (
			await this.axios.post(publicApiUrl.steamSendData(), {
				...payload
			})
		).data
	}
}
