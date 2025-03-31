'use client'

import React, { MutableRefObject, useRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask'

import { cn } from '../../utils/clsx'

interface PhoneFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string
	name: string
	label: string
	format?: string
}

export const PhoneField = (props: PhoneFieldProps) => {
	const { className, name, format = '+7 (999) 999-99-99', label } = props

	const maskGenerator = createDefaultMaskGenerator(format)

	const {
		control,
		formState: { errors }
	} = useFormContext()

	const [isFocused, setIsFocused] = React.useState(false)
	const inputRef = useRef<HTMLInputElement>(
		null
	) as MutableRefObject<HTMLInputElement | null>

	const errorText = errors[name]?.message as string

	return (
		<>
			<div
				className={cn(
					'flex flex-col gap-1 bg-white border border-light_green transition-border duration-200 rounded-2xl px-3.5 py-2',
					{
						'border-light_green_hover': isFocused,
						'border-error_color': errorText
					},
					className
				)}
				onClick={() => inputRef.current?.focus()}
			>
				<span className='font-medium text-xs'>{label}</span>

				<Controller
					control={control}
					name={name}
					render={({ field: { onChange, value, ...field } }) => (
						<MaskedInput
							className='placeholder:text-gray_color focus:outline-none'
							placeholder={format}
							onChange={onChange}
							value={value}
							{...field}
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
							maskGenerator={maskGenerator}
							ref={inputRef}
						/>
					)}
				/>
			</div>

			{errorText && (
				<p className='mt-1 text-sm text-error_color'>{errorText}</p>
			)}
		</>
	)
}
