'use client'

import { ReactSVG } from 'react-svg'
import { cn } from '@/shared/utils/clsx'
import styles from './SteamBanner.module.css'

export const SteamBanner = () => {
  return (
    <div
      className={cn(
        "bg-[url('/images/steam-bg.png')] w-full bg-no-repeat bg-cover bg-center rounded-[40px] h-[220px] mb-[10px] relative mx-auto pt-8 pb-6 pl-4 pr-1 flex flex-col justify-between " +
        "md:w-[490px] md:h-[306px] md:pt-8 md:pb-6 md:px-8 2xl:pb-12"
      )}
    >
      <ReactSVG
        src='/images/icons/steam-logo.svg'
        className='mb-2 ml-3 mt-0.5 md:mt-4 md:ml-6 w-5 h-5 md:w-auto md:h-auto'
      />
      
      <p
        className={cn(styles.text, "ml-3 mt-8 text-base md:text-lg md:mt-5 md:ml-6")}
        style={{ letterSpacing: '-0.04em' }}
      >
        Пополни Steam
      </p>
      
      <div className="flex flex-col gap-0.25 ml-3 md:ml-6" style={{ letterSpacing: '-0.04em' }}>
        <p
          className="text-[#FFD45C] font-bold text-lg md:text-[22px] leading-tight md:leading-snug"
          style={{ textShadow: '0px 0px 24px #FFFFFF80' }}
        >
          У нас самая низкая комиссия
        </p>
        <p
          className="text-white font-bold text-lg md:text-[22px] leading-tight md:leading-snug -mt-1"
          style={{ textShadow: '0px 0px 24px #FFFFFF80' }}
        >
          на пополнение баланса в 3%
        </p>
      </div>
    </div>
  )
}
