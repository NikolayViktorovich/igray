'use client'

import Image from 'next/image'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'

interface IProps {
	className?: string
}

export const SpeedPaymentBanner: FC<IProps> = ({ className }) => {
	return (
		<div className={`relative p-4 mb-[15px] ${className}`}>
			<div className='absolute inset-0 rounded-[60px] border-[17px] border-transparent bg-gradient-to-r from-[#62CEA6] via-[#72F2C1] to-[#66D7AD]'></div>
			<div className='relative bg-white rounded-[43px] p-11 z-10'>
				<ReactSVG src='speed.svg' className='mb-[20px]' />
				<Image
					className='absolute top-[-51px] right-[105px]'
					height={118}
					width={108}
					alt='lighting'
					src={'/images/lighting.png'}
				/>
				<div className='md:w-[250px]'>
					<h6 className='font-steppe font-extrabold text-xl_1 leading-[1.2] tracking-[-0.04em] mb-[17px] '>
						Моментальное пополнение за 2 минуты
					</h6>

					<p className='text-gray_color_primary'>
						Покупай желанные игры в два клика, без ожиданий и лишних
						действий на сервисе ИгРай
					</p>
				</div>
			</div>
		</div>
	)
}
