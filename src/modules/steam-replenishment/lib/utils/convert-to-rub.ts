import { Currencies } from '../../model/types'

export const convertFromRub = (
	amount: number,
	currency: Currencies,
	exchangeRates: { usdToRub: number; kztToRub: number }
): string => {
	const { usdToRub, kztToRub } = exchangeRates

	switch (currency) {
		case 'USD':
			return (amount * usdToRub).toFixed(2) // Переводим рубли в доллары
		case 'KZT':
			return ((amount / 100) * kztToRub).toFixed(2) // Переводим рубли в тенге
		case 'RUB':
		default:
			return Number(amount).toFixed(1) // Если уже в рублях, возвращаем сумму
	}
}
