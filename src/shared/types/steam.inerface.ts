import { Currencies } from './currency.interface'

export interface ICheckPromo {
	promo: string
}

export interface IPromoResponse {
	discount_percentage: number
}

export interface IPayment {
	login: string // email which user used to login in steam
	currency: Currencies
	payment_type: 'SPB' | 'CARD' | 'USDT'
	amount: number // before commission
	amount_after: number // after commission
	email: string
}

export interface IPaymentResponse {
	link: string
}
