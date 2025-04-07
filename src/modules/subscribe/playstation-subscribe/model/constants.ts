import { z } from 'zod'

export const formSubscribeValidate = z.object({
	email: z.string().email({ message: 'Неверный формат email' }),
	promocode: z.string().optional()
})

export const regionOptions = [
	{
		label: 'Турция',
		value: 'turkey'
	},
	{
		label: 'Украина',
		value: 'ukraine'
	}
]

export const rateOptions = [
	{
		label: 'Essential',
		value: 'essential'
	},
	{
		label: 'Extra',
		value: 'extra'
	},
	{
		label: 'Deluxe',
		value: 'deluxe'
	},
	{
		label: 'Ea Play',
		value: 'ea_play'
	}
]

export const signaturePeriodOptions = [
	{
		label: '1 мес - 1090₽',
		value: 'one_month'
	},
	{
		label: '3 мес - 3190₽',
		value: 'threeMonths'
	},
	{
		label: '12 мес - 4790₽',
		value: 'twelveMonth'
	}
]
