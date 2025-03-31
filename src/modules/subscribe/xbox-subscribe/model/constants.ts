import { z } from 'zod'

export const formSubscribeValidate = z.object({
	email: z.string().email({ message: 'Неверный формат email' }),
	promocode: z.string().optional()
})

export const signaturePeriodOptions = [
	{
		label: '1 мес - 1090₽',
		value: 'one_month'
	},
	{
		label: '4 мес - 3190₽',
		value: 'fourMonths'
	},
	{
		label: '7 мес - 4790₽',
		value: 'sevenMonth'
	},
	{
		label: '10 мес - 6590₽',
		value: 'tenMonths'
	},
	{
		label: '13 мес - 7890₽',
		value: 'thirteenMonths'
	},
	{
		label: '16 мес - 9490₽',
		value: 'sixteenMonths'
	},
	{
		label: '19 мес - 10590₽',
		value: 'nineteenMonths'
	},
	{
		label: '21 мес - 12290₽',
		value: 'twentyOneMonths'
	}
]
