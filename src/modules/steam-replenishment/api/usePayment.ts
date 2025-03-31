import { useMutation } from '@tanstack/react-query'

import { steamService } from '@/shared/api/services/steam.service'
import { STEAM_KEYS } from '@/shared/constants/query-keys'
import { IPayment } from '@/shared/types/steam.inerface'

export const usePayment = () => {
	const {
		mutate: sendPayment,
		isError: sendPaymentError,
		isSuccess: sendPaymentSuccess,
		isPending: sendPaymentPending,
		data: sendPaymentData
	} = useMutation({
		mutationKey: [STEAM_KEYS.CHECK_PROMO],
		mutationFn: (payload: IPayment) => steamService.pay(payload)
	})

	return {
		sendPayment,
		sendPaymentError,
		sendPaymentSuccess,
		sendPaymentData,
		sendPaymentPending
	}
}
