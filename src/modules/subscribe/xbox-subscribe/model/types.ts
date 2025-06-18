export interface FormSubscribeSchema {
    email: string
    promocode: string
    paymentMethod: 'CARD' | 'sbp' | 'crypto'
}

export type PaymentMethods = 'CARD' | 'sbp' | 'crypto'

export interface IPaymentInputs {
    sum: string
    login: string
    email: string
    promo?: string
    
}