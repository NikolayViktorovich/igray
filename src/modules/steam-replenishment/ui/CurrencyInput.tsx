'use client'

import useHover from '@react-hook/hover'
import { FC, useRef, useState } from 'react'

import { symbols } from '@/shared/constants/symbols'
import { CurrencyButton } from '@/shared/ui/Currency-button'
import { cn } from '@/shared/utils/clsx'

import type { Currencies } from '../model/types'

interface IProps {
	currency: Currencies
	onChangeCurrency: (currency: Currencies) => void
	onChangeSum: (e: React.ChangeEvent<HTMLInputElement> | string) => void
	sum: string | null
	touchedSumInput: boolean
	onTouch: () => void
}

export const CurrencyInput: FC<IProps> = ({
	currency,
	onChangeCurrency: handleChangeCurrency,
	onChangeSum: handleChangeSum,
	sum,
	touchedSumInput,
	onTouch
}) => {
	const currencyInputRef = useRef<HTMLInputElement>(null)
	const isHovering = useHover(currencyInputRef, {
		enterDelay: 100,
		leaveDelay: 100
	})

	const [isFocused, setIsFocused] = useState(false)

	const minSums = {
		USD: 1,
		RUB: 100,
		KZT: 500
	}

	const maxSums = {
		USD: 100,
		RUB: 10000,
		KZT: 46000
	}

	const currencies: Currencies[] = ['RUB', 'KZT', 'USD']

	return (
		<>
			<div
				className={cn(
					`rounded-[18px] border-light_green border pl-3 pr-2 h-size_1 flex justify-between items-center w-full transition-border duration-300`,
					{
						'hover:border-secondary_color': isHovering,
						'border-secondary_color': isFocused
					}
				)}
			>
				<div className='w-full'>
					<span className='text-xs tracking-tight font-medium text-gray_color'>
						Сумма пополнения
					</span>
					<div className='relative'>
						<input
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
							ref={currencyInputRef}
							type='text'
							onChange={e => {
								onTouch()
								if (currency === 'USD') {
									const rawValue = Number(
										e.target.value.replace(/[^0-9.]/g, '')
									)
									handleChangeSum(
										(
											Math.round(rawValue / 5) * 5
										).toString()
									)
								} else {
									handleChangeSum(e)
								}
							}}
							className='outline-none text-gray-800 w-[100px] h-[24px]'
							value={sum ? `${sum} ${symbols[currency]}` : ''}
						/>

						{currency === 'USD' && (
							<input
								type='range'
								step={5}
								min={5}
								value={Number(sum)}
								max={100}
								className='block w-full absolute bottom-[-10px]'
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									onTouch()
									const value = Number(e.target.value)
									const roundedValue =
										Math.round(value / 5) * 5

									handleChangeSum(roundedValue.toString())
								}}
							/>
						)}
					</div>
				</div>
				<ul className='flex gap-1'>
					{currencies.map((el, idx) => (
						<li key={idx}>
							<CurrencyButton
								onChangeCurrency={handleChangeCurrency}
								currentCurrency={currency}
								currency={el}
							/>
						</li>
					))}
				</ul>
			</div>
			<span className='text-[14px] block mb-[10px]'>
				{touchedSumInput &&
					(Number(sum) < minSums[currency] ||
						Number(sum) > maxSums[currency]) && (
						<span className='text-red-600 text-[12px] ml-2'>
							{Number(sum) < minSums[currency]
								? 'Минимальная сумма'
								: 'Максимальная сумма'}{' '}
							{Number(sum) < minSums[currency]
								? `${minSums[currency]} ${symbols[currency]}`
								: `${maxSums[currency]} ${symbols[currency]}`}
						</span>
					)}
			</span>
		</>
	)
}
