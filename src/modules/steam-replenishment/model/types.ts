export type PaymentMethods = 'CARD' | 'SPB' | 'USDT'

export interface IPaymentInputs {
	sum: string
	login: string
	email: string
	promo?: string
	 
}

export type Currencies = 'RUB' | 'USD' | 'KZT'
