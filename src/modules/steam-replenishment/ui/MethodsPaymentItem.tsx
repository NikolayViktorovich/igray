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
}

export const MethodPaymentItem: FC<IProps> = ({
	svg,
	text,
	title,
	onChange,
	method,
	currentPaymentType
}) => {
	return (
		<li
			onClick={() => onChange(method)}
			className={`border-[#1f3238] hover:border-opacity-100 transition-border duration-300 border-opacity-10 border rounded-[18px] p-[10px] md:basis-[30%] text-center ${
				currentPaymentType === method ? 'border-opacity-100' : ''
			}`}
		>
			<button
				type='button'
				className='flex sm:flex-col items-center sm:w-full gap-[15px] sm:gap-[6px] '
			>
				<ReactSVG src={svg} className='' />
				<div className='text-left sm:text-center'>
					<h5 className='text-gray-800 md:text-center'>{title}</h5>
					<p className='text-[12px] md:w-[120px] font-medium text-center text-[#AFC5BE]'>
						{text}
					</p>
				</div>
			</button>
		</li>
	)
}
