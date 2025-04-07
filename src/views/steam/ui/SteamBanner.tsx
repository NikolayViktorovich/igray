'use client'

import { ReactSVG } from 'react-svg'

import { cn } from '@/shared/utils/clsx'

import styles from './SteamBanner.module.css'

export const SteamBanner = () => {
	return (
		<div
			className={cn(
				"bg-[url('/images/steam-bg.png')] w-full bg-no-repeat bg-cover  md:w-[490px] md:h-[306px]  bg-center  rounded-[40px] h-[206px] mb-[10px] relative mx-auto pt-8 pb-6 2xl:pb-12 px-8 flex flex-col justify-between"
			)}
			//
		>
			<ReactSVG src='/images/icons/steam-logo.svg' className='mb-8' />

			<p className={cn(styles.text)}>
				Пополни <br /> баланс Steam
			</p>
		</div>
	)
}
