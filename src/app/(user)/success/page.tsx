'use client'

import { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'

function SuccessPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const InvId = searchParams.get('InvId')
  const OutSum = searchParams.get('OutSum')
  const CurrencyIn = searchParams.get('CurrencyIn')
  const custom = searchParams.get('custom')

  useEffect(() => {
    if (InvId && OutSum && CurrencyIn) {
      console.log('Успешный платеж:', { InvId, OutSum, CurrencyIn, custom })
    }
  }, [InvId, OutSum, CurrencyIn, custom])

  return (
    <div className="flex bg-transparent px-4 sm:px-8 pt-0 mt-[-13px]">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-start">
        <div className="flex flex-col w-full md:w-1/2 mt-10">
          <div className="mb-6 text-xs font-onest text-neutral-500 mt-[-23px]">
            <span
              onClick={() => router.push('/')}
              className="cursor-pointer hover:underline text-neutral-500"
            >
              Главная
            </span>{' '}
            <span className="mx-1">{'>'}</span>
            <span className="text-neutral-500">Заказ оформлен</span>
          </div>

          <h1 className="font-steppe font-extrabold text-[46px] tracking-[-0.04em] text-[#1F3238] mb-6 text-left">
            Ваш заказ оформлен
          </h1>
          <p className="font-onest font-normal text-[20px] text-left text-[#1F3238] max-w-[600px] mb-2 leading-relaxed">
            В течение <span className="font-bold">2-3х минут</span> на ваш кошелек автоматически произойдет пополнение!
          </p>
          <p className="font-onest font-normal text-[20px] text-left text-[#1F3238] max-w-[600px] mb-8 leading-relaxed">
            Если возникнут трудности напишите нам и укажите <span className="font-bold">номер заказа</span>!
          </p>
          <div className="flex items-center justify-between w-full max-w-[560px] min-h-[62px] rounded-[18px] bg-white px-4 mb-8">
            <div className="flex flex-col">
              <span className="font-onest font-medium text-[16px] text-[#4FCA9C]">
                Номер заказа
              </span>
              <span className="font-onest text-[12px] text-[#1F3238]">
                {InvId || '- -'}
              </span>
            </div>
            <Image
              src="/images/success/group.png"
              alt="icon"
              width={28}
              height={28}
            />
          </div>
          <p className="font-onest text-[14px] text-[#AFC5BE] max-w-[560px] mb-7">
            Мы отправили на вашу почту чек об оплате и данные заказа
          </p>
          <button
            onClick={() => router.push('/')}
            className="font-onest text-[20px] text-white bg-[#66D8AD] rounded-[18px] h-[68px] w-[280px] hover:bg-[#55b894] transition-colors flex items-center justify-center"
          >
            Перейти на главную
          </button>
        </div>

        <div className="hidden md:flex w-full md:w-1/2">
          <Image
            src="/images/success/Mask group.png"
            alt="Success"
            width={712}
            height={455}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Загрузка...</div>}>
      <SuccessPageContent />
    </Suspense>
  )
}