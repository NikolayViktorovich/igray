import { useQuery } from '@tanstack/react-query'

import { currencyService } from '@/shared/api/services/currency.service'
import { STEAM_KEYS } from '@/shared/constants/query-keys'
import { Currencies } from '@/shared/types/currency.interface'

export const useGetCurrencyRate = (currency: Currencies) => {
	const { data: currencyData, isLoading: currencyIsLoading } = useQuery({
		queryKey: [STEAM_KEYS.RATE, currency],
		queryFn: () => currencyService.findOne(currency),
		enabled: currency !== 'RUB'
	})

	return { currencyData, currencyIsLoading }
}
