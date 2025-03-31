'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { useServiceStore } from '@/shared/store/service.store'
import { Heading } from '@/shared/ui/Heading'
import { TextField } from '@/shared/ui/form/TextField'
import { cn } from '@/shared/utils/clsx'

import {
	formSubscribeValidate,
	rateOptions,
	regionOptions,
	signaturePeriodOptions
} from '../model/constants'
import { FormSubscribeSchema } from '../model/types'

export const formLoginSchema = z.object({
	email: z.string().email({ message: 'Неверный формат email' }),
	promocode: z.string().optional()
})

export const PlaystationSubscribe = () => {
	const [selectedSignaturePeriod, setSelectedSignaturePeriod] = useState(
		signaturePeriodOptions[0].value
	)

	const [selectedRate, setSelectedRate] = useState(rateOptions[0].value)
	const [selectedRegion, setSelectedRegion] = useState(regionOptions[0].value)

	const { setIsModalVisible } = useServiceStore()

	const form = useForm({
		resolver: zodResolver(formSubscribeValidate),
		defaultValues: {
			email: '',
			promocode: ''
		}
	})

	const promocode = form.watch('promocode')

	const labelSignaturePeriod = useMemo(() => {
		return signaturePeriodOptions.find(
			item => item.value === selectedSignaturePeriod
		)?.label
	}, [selectedSignaturePeriod])

	const labelRate = useMemo(() => {
		return rateOptions.find(item => item.value === selectedRate)?.label
	}, [selectedRate])

	const labelRegion = useMemo(() => {
		return regionOptions.find(item => item.value === selectedRegion)?.label
	}, [selectedRegion])

	const onSubscribe: SubmitHandler<FormSubscribeSchema> = data => {
		console.log('RESULT', {
			...data
		})

		setIsModalVisible(true)
	}

	const onCheckingPromocode = () => {
		if (!promocode.length) {
			form.setError('promocode', {
				message: 'Введите промокод'
			})

			return
		}

		setIsModalVisible(true)
	}

	useEffect(() => {
		if (promocode.length) {
			form.clearErrors('promocode')
		}
	}, [promocode])

	return (
		<div className='rounded-[46px] flex justify-center p-6 lg:p-10 bg-white xl_2:w-[620px]'>
			<div className='max-w-[740px] w-full'>
				<Heading className='mb-4' level={1} size={'lg_2'}>
					Подписки Playstation Plus
				</Heading>

				<div className='grid grid-cols-1 xs:grid-cols-3 gap-1.5 mb-4'>
					<div className='flex items-center xs:col-span-2  gap-1.5 p-2.5 border border-border_gray rounded-xl'>
						<Image
							src='/images/icons/time.svg'
							width='30'
							height='30'
							alt='Иконка времени'
						/>

						<div className='text-xs'>
							<span className='text-gray_color'>
								Активация на Ваш аккаунт
							</span>
							<p>В течение 10 Минут</p>
						</div>
					</div>

					<div className='flex items-center justify-between   gap-1.5 p-2.5 border border-border_gray rounded-xl sm:w-40'>
						<div className='text-xs'>
							<span className='text-gray_color'>Платформа</span>
							<p>Xbox</p>
						</div>

						<Image
							src='/images/icons/mini-arrow.svg'
							width='12'
							height='24'
							alt='Иконка времени'
						/>
					</div>
				</div>

				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(onSubscribe)}>
						<div>
							<div>
								<div className='flex gap-2 text-xs mb-2.5'>
									<p className='text-gray_color'>Регион:</p>
									<span className='text-primary_color'>
										{labelRegion}
									</span>
								</div>
							</div>

							<div className='mb-4'>
								<div className='mb-4 flex flex-wrap gap-1.5'>
									{regionOptions.map(item => (
										<button
											key={item.value}
											type='button'
											onClick={() =>
												setSelectedRegion(item.value)
											}
											className={cn(
												'bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] h-9 px-5 rounded-[14px] text-xs md:text-sm font-medium text-gray_dark_color outline outline-transparent duration-200 transition-outline outline-1 hover:outline-bg_color active:outline-bg_color',
												{
													'outline-bg_color':
														item.value ===
														selectedRegion
												}
											)}
										>
											{item.label}
										</button>
									))}
								</div>
							</div>
						</div>

						<div>
							<div>
								<div className='flex gap-2 text-xs mb-2.5'>
									<p className='text-gray_color'>Тариф:</p>
									<span className='text-primary_color'>
										{labelRate}
									</span>
								</div>
							</div>

							<div className='mb-4 flex flex-wrap gap-1.5'>
								{rateOptions.map(item => (
									<button
										key={item.value}
										type='button'
										onClick={() =>
											setSelectedRate(item.value)
										}
										className={cn(
											'bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] h-9 px-5 rounded-[14px] text-xs md:text-sm font-medium text-gray_dark_color outline outline-transparent duration-200 transition-outline outline-1 hover:outline-bg_color active:outline-bg_color',
											{
												'outline-bg_color':
													item.value === selectedRate
											}
										)}
									>
										{item.label}
									</button>
								))}
							</div>
						</div>

						<div>
							<div>
								<div className='flex gap-2 text-xs mb-2.5'>
									<p className='text-gray_color'>
										Срок подписки::
									</p>
									<span className='text-primary_color'>
										{labelSignaturePeriod}
									</span>
								</div>
							</div>

							<div className='mb-4 flex flex-wrap gap-1.5'>
								{signaturePeriodOptions.map(item => (
									<button
										key={item.value}
										type='button'
										onClick={() =>
											setSelectedSignaturePeriod(
												item.value
											)
										}
										className={cn(
											'bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] h-9 px-5 rounded-[14px] text-xs md:text-sm font-medium text-gray_dark_color outline outline-transparent duration-200 transition-outline outline-1 hover:outline-bg_color active:outline-bg_color',
											{
												'outline-bg_color':
													item.value ===
													selectedSignaturePeriod
											}
										)}
									>
										{item.label}
									</button>
								))}
							</div>
						</div>

						<div className='flex flex-col gap-4 mb-4 md:flex-row'>
							<TextField
								className='order-1 sm:order-none md:w-56'
								name='email'
								label='Электронная почта'
								placeholder='name@mail.com'
							/>

							<div className='relative'>
								<TextField
									className='pr-32 md:w-80'
									name='promocode'
									label='У вас есть промокод?'
									placeholder='Уменьши комиссию...'
								/>

								<button
									type='button'
									onClick={onCheckingPromocode}
									className='absolute right-1 top-[5px] bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] h-12 px-5 rounded-[14px] text-xs md:text-sm font-medium text-gray_color outline outline-transparent duration-200 transition-outline outline-1'
								>
									Применить
								</button>
							</div>
						</div>

						<button
							type='submit'
							className='bg-bg_color w-full hover:shadow-[0_2px_#469677]  mx-auto block py-4 rounded-[18px] text-white border-none shadow-[0_5px_#469677] active:shadow-[0_2px_#469677] active:translate-y-[4px] transition-all'
						>
							Оформить • 1090₽
						</button>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}
