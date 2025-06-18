'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'

import { ModalLayout } from '@/components/user/common/modals/ModalLayout'

import { Spinner } from '@/shared/ui/Spinner'
import { ProccesingPersonalDataPanel } from '@/shared/ui/proccesing-personal-data-panel/ProccesingPersonalDataPanel'

import { useGetCurrencyRate } from '../api/useGetCurrencyRate'
import { usePayment } from '../api/usePayment'
import { maxSums, minSums } from '../lib/constants'
import { convertFromRub } from '../lib/utils/convert-to-rub'
import { extractNumber } from '../lib/utils/extract-number'
import type { Currencies, IPaymentInputs, PaymentMethods } from '../model/types'

import { CommissionPanel } from './ComissionPanel'
import { CurrencyInput } from './CurrencyInput'
import { EmailInput } from './EmailInput'
import { MethodsPayment } from './MethodsPayment'
import { PayButton } from './PayButton'
import { PromoInput } from './PromoInput'
import { SteamLogin } from './SteamLogin'
import { TotalAmount } from './TotalAmount'

export const SteamReplenishment = () => {
  const router = useRouter()

  const [sum, setSum] = useState<string>('100')
  const [currency, setCurrency] = useState<Currencies>('RUB')
  const [commission, setCommission] = useState(22)
  const [discount, setDiscount] = useState(0)
  const [paymentType, setPaymentType] = useState<PaymentMethods>('SPB')
  const [touchedSumInput, setTouchedSumInput] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [promoError, setPromoError] = useState<string | null>(null)
  const [appliedPromo, setAppliedPromo] = useState<string>('') 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors
  } = useForm<IPaymentInputs>({
    defaultValues: {
      sum: '100',
      login: '',
      email: '',
      promo: ''
    }
  })

  const promo = watch('promo')

  const { currencyData, currencyIsLoading } = useGetCurrencyRate(currency)

  const {
    sendPayment,
    sendPaymentSuccess,
    sendPaymentData,
    sendPaymentPending
  } = usePayment()

  const handleCheckPromo = async (promoValue: string) => {
    if (!promoValue?.length) {
      setError('promo', { message: 'Введите промокод' })
      setPromoError('Введите промокод')
      setAppliedPromo('')
      return
    }

    try {
      const response = await axios.post('https://igray24back.ru/subscription/promo/check-promo', { promo: promoValue })
      console.log('Промокод ответ:', response.data)
      if (response.data.check) {
        setDiscount(response.data.discount || 0)
        clearErrors('promo')
        setPromoError(null)
        setAppliedPromo(promoValue)
      } else {
        setError('promo', { message: 'Недействительный промокод' })
        setPromoError('Недействительный промокод')
        setDiscount(0)
        setAppliedPromo('') 
      }
    } catch (error) {
      console.error('Ошибка проверки промокода:', error)
      setError('promo', { message: 'Ошибка проверки промокода' })
      setPromoError('Ошибка проверки промокода')
      setDiscount(0)
      setAppliedPromo('')
    }
  }

  const handleTouchSumInput = () => setTouchedSumInput(true)

  const toggleModal = () => setIsModalVisible(prev => !prev)

const handlePayment: SubmitHandler<IPaymentInputs> = data => {
  const { login, email } = data

  const currentSum = Number(extractNumber(sum))

  if (
    currentSum >= minSums[currency] &&
    currentSum <= maxSums[currency]
  ) {
    const fetchData = {
      login,
      email,
      amount: Number(
        convertFromRub(Number(sum), currency, {
          usdToRub: currencyData?.data,
          kztToRub: currencyData?.data
        })
      ),
      currency,
      payment_type: paymentType,
      promo: appliedPromo,
      success_url: 'https://igray24.ru/success',
    }

    sendPayment(fetchData)
  }
}

  const handleChangePaymentType = (paymentType: PaymentMethods) => {
    setPaymentType(paymentType)
  }

  const handleChangeCurrency = (currency: Currencies) => {
    setCurrency(currency)
    switch (currency) {
      case 'RUB':
        setSum('100')
        break
      case 'KZT':
        setSum('500')
        break
      case 'USD':
        setSum('5')
        break
    }
  }

  const handleChangeSum = (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    if (typeof e === 'string') {
      setSum(e)
    } else {
      console.log(e.target.value.replace(/[^0-9.]/g, ''))
      const rawValue = e.target.value.replace(/[^0-9.]/g, '')
      setSum(rawValue)
    }
  }

  useEffect(() => {
    if (currency === 'RUB' && sum === '10000') {
      setSum('10000')
    } else if (currency === 'KZT' && sum === '45000') {
      setSum('45000')
    } else if (currency === 'USD' && sum === '100') {
      setSum('100')
    }
  }, [sum, currency])

  useEffect(() => {
    if (sendPaymentSuccess && sendPaymentData?.link) {
      const newLink = sendPaymentData.link.replace(
        'igray24.ru',
        'igray24back.ru'
      )
      router.push(newLink)
      toggleModal()
    }
  }, [router, sendPaymentData?.link, sendPaymentSuccess])

  useEffect(() => {
    if (sendPaymentPending) {
      toggleModal()
    }
  }, [sendPaymentPending])

  useEffect(() => {
    const numericSum = Number(sum)

    if (currency === 'RUB' && numericSum) {
      if (numericSum >= 100 && numericSum < 1000) {
        setCommission(22)
      } else if (numericSum >= 1000 && numericSum < 3000) {
        setCommission(20)
      } else if (numericSum >= 3000 && numericSum <= 10000) {
        setCommission(18)
      }
    } else if (currency === 'KZT' && numericSum) {
      if (numericSum >= 500 && numericSum < 5000) {
        setCommission(22)
      } else if (numericSum >= 5000 && numericSum < 15000) {
        setCommission(20)
      } else if (numericSum >= 15000 && numericSum <= 46500) {
        setCommission(18)
      }
    } else if (currency === 'USD' && numericSum) {
      if (numericSum >= 5 && numericSum < 10) {
        setCommission(22)
      } else if (numericSum >= 10 && numericSum < 30) {
        setCommission(20)
      } else if (numericSum >= 30 && numericSum <= 100) {
        setCommission(18)
      }
    }
  }, [sum, currency, watch])

  useEffect(() => {
    if (promo?.length) {
      clearErrors('promo')
      setPromoError(null)
      setAppliedPromo('') 
    }
  }, [promo, clearErrors])

  return (
    <>
      <form onSubmit={handleSubmit(handlePayment)}>
        <div className='bg-[#ffffff] rounded-[40px] lg:rounded-[60px] px-4 py-[50px] mb-[35px] md:w-[540px] md:mx-auto md:px-[30px] xl:px-[50px]'>
          <h3 className='font-steppe font-extrabold text-xl_1 mb-5 '>
            Быстрое пополнение
          </h3>

          <CurrencyInput
            onTouch={handleTouchSumInput}
            touchedSumInput={touchedSumInput}
            onChangeCurrency={handleChangeCurrency}
            onChangeSum={handleChangeSum}
            currency={currency}
            sum={sum}
          />

          <div className='flex flex-col sm:flex-row gap-[5px] mb-5'>
            <SteamLogin
              currency={currency}
              register={register}
              errors={errors}
            />

            <TotalAmount
              currencyRate={currencyData?.data}
              currencyIsLoading={currencyIsLoading}
              currency={currency}
              sum={Number(sum)}
              commission={commission}
              discount={discount}
            />
          </div>
          <CommissionPanel currency={currency} />
          <PromoInput
            discount={discount}
            checkPromo={handleCheckPromo}
            error={promoError}
          />

          <EmailInput register={register} errors={errors} />

          <MethodsPayment
            currentPaymentType={paymentType}
            onChange={handleChangePaymentType}
          />

          <PayButton
            discount={discount}
            commission={commission}
            currencyRate={currencyData?.data}
            currencyIsLoading={currencyIsLoading}
            currency={currency}
            sum={sum}
          />

          <ProccesingPersonalDataPanel
            checked={true}
            text='Принимаю условия обработки персональных данных'
          />
        </div>
      </form>

      <ModalLayout isOpen={isModalVisible}>
        <div className='flex justify-center'>
          <Spinner />
        </div>
      </ModalLayout>
    </>
  )
}