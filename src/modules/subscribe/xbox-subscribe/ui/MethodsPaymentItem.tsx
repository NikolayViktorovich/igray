import { FC } from 'react'
import { ReactSVG } from 'react-svg'

import type { PaymentMethods } from '../model/types'

interface IProps {
  svg: string
  text: string
  title: string
  onChange: (method: PaymentMethods) => void
  currentPaymentType: PaymentMethods
  method: PaymentMethods
  className?: string
}

export const MethodPaymentItem: FC<IProps> = ({
  svg,
  text,
  title,
  onChange,
  method,
  currentPaymentType,
  className
}) => {
  const isActive = currentPaymentType === method

  return (
    <div
      onClick={() => onChange(method)}
      className={`flex items-center gap-3 px-4 py-3 rounded-[14px] border cursor-pointer transition-colors ${className || ''} ${
        isActive
          ? 'border-[#1f3238] bg-[#F0FBF8]'
          : 'border border-[#1f3238]/10 bg-white hover:border-[#1f3238]/50'
      }`}
    >
      <div className='flex items-start justify-center w-6 h-6 -translate-y-1'>
        <ReactSVG
          src={svg}
          className='w-full h-full [&>svg]:w-full [&>svg]:h-full'
        />
      </div>
      <div className='text-left'>
        <h5 className='text-sm font-medium text-gray-800'>{title}</h5>
        <p className='text-[12px] text-[#AFC5BE]'>{text}</p>
      </div>
    </div>
  )
}