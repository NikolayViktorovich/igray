import { useMutation } from '@tanstack/react-query'

import { steamService } from '@/shared/api/services/steam.service'
import { STEAM_KEYS } from '@/shared/constants/query-keys'

export const useCheckPromo = () => {
	const {
		mutate: checkPromo,
		data,
		isSuccess: checkPromoIsSuccess,
		isPending: checkPromoIsPending
	} = useMutation({
		mutationKey: [STEAM_KEYS.CHECK_PROMO],
		mutationFn: (code: string) => steamService.checkPromo(code)
	})

	return { checkPromo, data, checkPromoIsSuccess, checkPromoIsPending }
}
