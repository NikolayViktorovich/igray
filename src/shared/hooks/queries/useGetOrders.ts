import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { ordersService } from '@/shared/api/services/orders.service'
import { STEAM_KEYS } from '@/shared/constants/query-keys'
import { IGetOrdersQueryParams } from '@/shared/types/orders.interface'

export const useGetOrders = (payload: IGetOrdersQueryParams) => {
	const {
		data: orders,
		isLoading,
		error
	} = useQuery({
		queryKey: [STEAM_KEYS.GET_ORDERS, payload.page],
		queryFn: () => ordersService.findMany(payload),
		placeholderData: keepPreviousData
	})

	return { orders, isLoading, error }
}
