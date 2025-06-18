'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'

import { Heading } from '@/shared/ui/Heading'
import { TextField } from '@/shared/ui/form/TextField'
import { cn } from '@/shared/utils/clsx'
import { MethodsPayment } from './MethodsPayment'

import {
    formSubscribeValidate,
    signaturePeriodOptions
} from '../model/constants'
import type { FormSubscribeSchema, PaymentMethods } from '../model/types'

const accountTypeOptions = [
    { label: 'Новый', value: 'new' },
    { label: 'Старый', value: 'old' }
]

const getDurationInMonths = (period: string): number => {
    switch (period) {
        case 'one_month':
            return 1
        case 'fourMonths':
            return 4
        case 'sevenMonths':
            return 7
        case 'tenMonths':
            return 10
        case 'thirteenMonths':
            return 13
        case 'sixteenMonths':
            return 16
        case 'nineteenMonths':
            return 19
        case 'twentyOneMonths':
            return 21
        default:
            return 1
    }
}

export const XboxSubscribe = () => {
    const [selectedSignaturePeriod, setSelectedSignaturePeriod] = useState(signaturePeriodOptions[0].value)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethods>('sbp')
    const [selectedAccountType, setSelectedAccountType] = useState(accountTypeOptions[0].value)
    const [discount, setDiscount] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<FormSubscribeSchema>({
        resolver: zodResolver(formSubscribeValidate),
        defaultValues: {
            email: '',
            promocode: '',
            paymentMethod: 'sbp' as const
        }
    })

    const promocode = form.watch('promocode')

    const labelSignaturePeriod = useMemo(() => {
        return signaturePeriodOptions.find(item => item.value === selectedSignaturePeriod)?.label
    }, [selectedSignaturePeriod])

    const price = useMemo(() => {
        let basePrice = signaturePeriodOptions.find(item => item.value === selectedSignaturePeriod)?.label.split(' - ')[1] || '1090₽'
        if (discount) {
            basePrice = parseFloat(basePrice.replace('₽', '')) * (1 - discount / 100) + '₽'
        }
        return basePrice
    }, [discount, selectedSignaturePeriod])

    const labelAccountType = useMemo(() => {
        return accountTypeOptions.find(item => item.value === selectedAccountType)?.label
    }, [selectedAccountType])

    const onCheckingPromocode = async () => {
        if (!promocode?.length) {
            form.setError('promocode', { message: 'Введите промокод' })
            return
        }

        try {
            const response = await axios.post('https://igray24back.ru/subscription/promo/check-promo', { promo: promocode })
            if (response.data.check) {
                setDiscount(response.data.discount || 0)
                form.clearErrors('promocode')
            } else {
                form.setError('promocode', { message: 'Недействительный промокод' })
                setDiscount(null)
            }
        } catch {
            form.setError('promocode', { message: 'Ошибка проверки промокода' })
            setDiscount(null)
        }
    }

    const onSubscribe: SubmitHandler<FormSubscribeSchema> = async (data) => {
        setIsLoading(true)
        try {
            const payload = {
                account_type: selectedAccountType,
                payment: selectedPaymentMethod,
                duration: getDurationInMonths(selectedSignaturePeriod),
                email: data.email,
                promo: promocode || null,
                success_url: 'https://igray24.ru/success',
            }

            console.log('Отправляемый payload:', payload)

            const response = await axios.post('https://igray24back.ru/subscription/xbox/create-payment-link', payload)
            console.log('Ответ API:', response.data)

            const { link } = response.data
            if (link) {
                window.location.href = link
            } else {
                throw new Error('Платежная ссылка не получена')
            }
        } catch {
            form.setError('email', { message: 'Ошибка при создании платежа. Попробуйте позже.' })
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (promocode?.length) {
            form.clearErrors('promocode')
        }
    }, [promocode, form])

    return (
        <div className='rounded-[46px] flex justify-center p-6 lg:p-10 bg-white xl_2:w-[620px]'>
            <div className='max-w-[740px] w-full'>
                <Heading className='mb-4' level={1} size={'lg_2'}>
                    Xbox Game Pass Ultimate
                </Heading>

                <div className='grid grid-cols-1 xs:grid-cols-3 gap-1.5 mb-4'>
                    <div className='flex items-center xs:col-span-2 gap-1.5 p-2.5 border border-border_gray rounded-xl'>
                        <Image
                            src='/images/icons/time.svg'
                            width='30'
                            height='30'
                            alt='Иконка времени'
                        />
                        <div className='text-xs'>
                            <span className='text-gray_color'>Активация на Ваш аккаунт</span>
                            <p>В течение 10 Минут</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between gap-1.5 p-2.5 border border-border_gray rounded-xl sm:w-40'>
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
                        <div className='flex gap-2 text-xs mb-2.5'>
                            <p className='text-gray_color'>Тип аккаунта:</p>
                            <span className='text-primary_color'>{labelAccountType}</span>
                        </div>

                        <div className='mb-4 flex flex-wrap gap-1.5'>
                            {accountTypeOptions.map(item => (
                                <button
                                    key={item.value}
                                    type='button'
                                    onClick={() => setSelectedAccountType(item.value)}
                                    className={cn(
                                        'bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] h-9 px-5 rounded-[14px] text-xs md:text-sm font-medium text-gray_dark_color outline outline-transparent duration-200 transition-outline outline-1 hover:outline-bg_color active:outline-bg_color',
                                        {
                                            'outline-bg_color': item.value === selectedAccountType
                                        }
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className='flex gap-2 text-xs mb-2.5'>
                            <p className='text-gray_color'>Срок подписки:</p>
                            <span className='text-primary_color'>{labelSignaturePeriod}</span>
                        </div>

                        <div className='mb-4 flex flex-wrap gap-1.5'>
                            {signaturePeriodOptions.map(item => (
                                <button
                                    key={item.value}
                                    type='button'
                                    onClick={() => setSelectedSignaturePeriod(item.value)}
                                    className={cn(
                                        'bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] h-9 px-5 rounded-[14px] text-xs md:text-sm font-medium text-gray_dark_color outline outline-transparent duration-200 transition-outline outline-1 hover:outline-bg_color active:outline-bg_color',
                                        {
                                            'outline-bg_color': item.value === selectedSignaturePeriod
                                        }
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className='flex flex-col md:items-start gap-4 mb-4 md:flex-row'>
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

                        {discount && (
                            <div className='text-green-600 text-sm mb-4'>
                                Скидка {discount}% применена!
                            </div>
                        )}

                        <MethodsPayment
                            currentPaymentType={selectedPaymentMethod}
                            onChange={(method) => {
                                setSelectedPaymentMethod(method)
                                form.setValue('paymentMethod', method)
                            }}
                        />

                        <button
                            type='submit'
                            className='bg-bg_color w-full hover:shadow-[0_2px_#469677] mx-auto block py-4 rounded-[14px] text-white border-none shadow-[0_5px_#469677] active:shadow-[0_2px_#469677] active:translate-y-[4px] transition-all'
                            disabled={isLoading}
                        >
                            {isLoading ? 'Обработка...' : `Оформить • ${price}`}
                        </button>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}