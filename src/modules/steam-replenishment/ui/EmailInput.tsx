'use client'

import useHover from '@react-hook/hover'
import { FC, useRef, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { cn } from '@/shared/utils/clsx'

import type { IPaymentInputs } from '../model/types'

interface IProps {
	register: UseFormRegister<IPaymentInputs>
	errors: FieldErrors<IPaymentInputs>
}

export const EmailInput: FC<IProps> = ({ register, errors }) => {
	const currencyInputRef = useRef<HTMLInputElement>(null)
	const isHovering = useHover(currencyInputRef, {
		enterDelay: 100,
		leaveDelay: 100
	})

	const [isFocused, setIsFocused] = useState(false)

	return (
		<>
			<div
				className={cn(
					'border-light_green border rounded-[18px] h-size_1 py-[10px] px-[15px] transition-border duration-300',
					{
						'hover:border-secondary_color': isHovering,
						'border-secondary_color': isFocused
					}
				)}
			>
				<label htmlFor='email' className='block font-medium text-xs'>
					Электронная почта
				</label>
				<input
					type='text'
					{...register('email', {
						required: true,
						pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
					})}
					id='email'
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					// ref={currencyInputRef}
					placeholder='name@mail.com'
					className='outline-none placeholder:text-gray_color'
				/>
			</div>
			<p className='mb-[15px]'>
				{errors.email && (
					<span className='text-red-600 text-xs ml-2'>
						Электронная почта обязательна
					</span>
				)}
			</p>
		</>
	)
}
