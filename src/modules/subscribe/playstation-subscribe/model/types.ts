export interface FormSubscribeSchema {
	email: string
	promocode: string
}
export type PaymentMethods = 'CARD' | 'SPB' | 'USDT'

export interface IPaymentInputs {
	sum: string
	login: string
	email: string
}

export type Currencies = 'RUB' | 'USD' | 'KZT'
