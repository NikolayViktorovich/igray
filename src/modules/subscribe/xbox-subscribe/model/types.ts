export interface FormSubscribeSchema {
    email: string
    promocode: string
    paymentMethod: 'CARD' | 'SPB' | 'USDT'
}
export type PaymentMethods = 'CARD' | 'SPB' | 'USDT'

export interface IPaymentInputs {
	sum: string
	login: string
	email: string
}
