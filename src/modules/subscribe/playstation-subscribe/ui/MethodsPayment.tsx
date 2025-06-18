import { FC } from 'react'
import type { PaymentMethods } from '../model/types'
import { MethodPaymentItem } from './MethodsPaymentItem'

interface IProps {
  onChange: (method: PaymentMethods) => void
  currentPaymentType: PaymentMethods
}

export const MethodsPayment: FC<IProps> = ({
  onChange,
  currentPaymentType
}) => {
  return (
    <div className='mb-7'>
      <h3 className='text-gray_color font-medium sm:mb-3 text-xs'>
        Выберите вариант оплаты
      </h3>
      <div className='flex flex-col sm:flex-row gap-4 w-full'>
        <MethodPaymentItem
          currentPaymentType={currentPaymentType}
          method='sbp'
          onChange={onChange}
          svg='/images/icons/spb.svg'
          text='Через приложение вашего банка'
          title='Через СБП'
          className='sm:w-auto'
        />
        <MethodPaymentItem
          method='crypto'
          currentPaymentType={currentPaymentType}
          onChange={onChange}
          svg='/images/icons/crypto.svg'
          text='Возможна оплата в USDT'
          title='Криптовалюта'
          className='sm:flex-1'
        />
      </div>
    </div>
  )
}