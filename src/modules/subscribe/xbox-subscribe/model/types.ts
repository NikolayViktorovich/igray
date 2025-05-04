export interface FormSubscribeSchema {
    email: string;
    promocode: string;
    paymentMethod: 'CARD' | 'SPB';
}

export type PaymentMethods = 'CARD' | 'SPB';