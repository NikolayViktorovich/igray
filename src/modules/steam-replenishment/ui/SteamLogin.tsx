'use client'

import useHover from '@react-hook/hover'
import { FC, useRef, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { cn } from '@/shared/utils/clsx'

import type { Currencies, IPaymentInputs } from '../model/types'

interface IProps {
	register: UseFormRegister<IPaymentInputs>
	errors: FieldErrors<IPaymentInputs>
	currency: Currencies
}

export const SteamLogin: FC<IProps> = ({ register, errors, currency }) => {
	const currencyInputRef = useRef<HTMLInputElement>(null)
	const isHovering = useHover(currencyInputRef, {
		enterDelay: 100,
		leaveDelay: 100
	})

	const [isFocused, setIsFocused] = useState(false)

	return (
		<>
			<div className='relative'>
				<div
					className={cn(
						'rounded-[18px] flex flex-col justify-center border-[#DDF1EA] border px-[15px] py-[5px] h-size_1 sm:basis-[50%] mb-[15px] sm:mb-0 transition-border duration-300',
						{
							'hover:border-secondary_color': isHovering,
							'border-secondary_color': isFocused
						}
					)}
				>
					<label
						htmlFor='login'
						className='block font-medium text-xs'
					>
						{currency === 'USD'
							? 'Контакт для связи'
							: 'Steam логин'}
					</label>

					<input
						type='text'
						placeholder='Name...'
						className='outline-none placeholder:text-gray_color'
						id='login'
						{...register('login', { required: true })}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						// ref={currencyInputRef}
					/>
				</div>
				{errors.login && (
					<span className='text-red-600 block text-[12px] ml-2 absolute bottom-[-2px] sm:bottom-[-18px]'>
						{currency === 'USD'
							? 'Обязательное поле'
							: 'Steam Логин обязателен'}
					</span>
				)}
			</div>
		</>
	)
}
