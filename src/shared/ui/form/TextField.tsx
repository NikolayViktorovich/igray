'use client'

import React, { MutableRefObject, useRef } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '../../utils/clsx'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string
	placeholder?: string
	name: string
	label: string
}

export const TextField = (props: TextFieldProps) => {
	const {
		className,
		name,
		placeholder = 'default',
		label,
		...otherProps
	} = props

	const {
		register,
		formState: { errors }
	} = useFormContext()

	const [isFocused, setIsFocused] = React.useState(false)
	const { ref } = register(name)
	const inputRef = useRef<HTMLInputElement>(
		null
	) as MutableRefObject<HTMLInputElement | null>
	const errorText = errors[name]?.message as string

	return (
		<div className='flex flex-col'>
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

				<input
					className='placeholder:text-gray_color focus:outline-none'
					placeholder={placeholder}
					onFocus={() => setIsFocused(true)}
					{...register(name)}
					onBlur={() => setIsFocused(false)}
					{...otherProps}
					ref={e => {
						ref(e)
						inputRef.current = e
					}}
				/>
			</div>

			{errorText && (
				<p className='mt-1 text-sm text-error_color'>{errorText}</p>
			)}
		</div>
	)
}
