'use client'

import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import Link from 'next/link'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import styles from './ProductMenuAccardion.module.css'
import { useServiceStore } from '@/shared/store/service.store'
import { cn } from '@/shared/utils/clsx'

export const ProductMenuAccardion = () => {
	const { setIsModalVisible } = useServiceStore()

	const handleClick = () => {
		setIsModalVisible(true)
	}

	return (
		<Accordion
			className={'w-full space-y-2.5'}
			transition
			transitionTimeout={200}
		>
			<AccordionItem
				className={'w-full'}
				header={({ state: { isEnter } }) => (
					<Link
						href={publicUrl.steam()}
						className={cn(
							'flex justify-between text-lg text-left px-5 font-bold w-full py-3 border border-light_green_border transition-all duration-200',
							{
								'rounded-2xl': !isEnter,
								'rounded-2xl border-transparent bg-white':
									isEnter
							}
						)}
					>
						<span>Steam</span>

						<img
							className={cn('rotate-320')}
							src='/images/icons/arrow-green-right.svg'
							alt=''
						/>
					</Link>
				)}
				buttonProps={{
					className: () => `w-full`
				}}
				contentProps={{
					className: 'transition-height duration-200 ease-out'
				}}
			></AccordionItem>

			<AccordionItem
				className={'w-full'}
				header={({ state: { isEnter } }) => (
					<Link
						href='#'
						className={cn(
							'flex justify-between text-lg text-left px-5 font-bold w-full py-3 border border-light_green_border transition-all duration-200 pointer-events-none',
							{
								'rounded-2xl': !isEnter,
								'rounded-tl-2xl rounded-tr-2xl border-transparent bg-white':
									isEnter
							}
						)}
					>
						<span>Battle NET</span>

						<img
							className={cn('rotate-90', {
								'-rotate-90': isEnter
							})}
							src='/images/icons/arrow-green-right.svg'
							alt=''
						/>
					</Link>
				)}
				buttonProps={{
					className: () => `w-full`
				}}
				contentProps={{
					className: 'transition-height duration-200 ease-out'
				}}
			>
				<div className='px-2.5 pb-2.5 rounded-bl-2xl rounded-br-2xl border-transparent bg-white space-y-1'>
					<Link
						onClick={handleClick}
						className={cn(
							'flex justify-between items-center font-semibold text-sm px-2.5 py-1.5 bg-custom-gradient-2 rounded-lg',
							styles.subLink
						)}
						href='#'
					>
						Цифровые Игры
						<img src='/images/icons/arrow-dark-right.svg' alt='' />
					</Link>

					<Link
						onClick={handleClick}
						className={cn(
							'flex justify-between items-center font-semibold text-sm px-2.5 py-1.5 bg-custom-gradient-2 rounded-lg',
							styles.subLink
						)}
						href='#'
					>
						Игровое Время
						<img src='/images/icons/arrow-dark-right.svg' alt='' />
					</Link>
				</div>
			</AccordionItem>

			<AccordionItem
				className={'w-full'}
				header={({ state: { isEnter } }) => (
					<Link
						href={'#'}
						onClick={handleClick}
						className={cn(
							'flex justify-between text-lg text-left px-5 font-bold w-full py-3 border border-light_green_border transition-all duration-200',
							{
								'rounded-2xl': !isEnter,
								'rounded-2xl border-transparent bg-white':
									isEnter
							}
						)}
					>
						<span>Epic Games</span>

						<img
							className={cn('rotate-320')}
							src='/images/icons/arrow-green-right.svg'
							alt=''
						/>
					</Link>
				)}
				buttonProps={{
					className: () => `w-full`
				}}
				contentProps={{
					className: 'transition-height duration-200 ease-out'
				}}
			></AccordionItem>

			<AccordionItem
				className={'w-full'}
				header={({ state: { isEnter } }) => (
					<Link
						href={'#'}
						onClick={handleClick}
						className={cn(
							'flex justify-between text-lg text-left px-5 font-bold w-full py-3 border border-light_green_border transition-all duration-200',
							{
								'rounded-2xl': !isEnter,
								'rounded-2xl border-transparent bg-white':
									isEnter
							}
						)}
					>
						<span>Microsoft Office</span>

						<img
							className={cn('rotate-320')}
							src='/images/icons/arrow-green-right.svg'
							alt=''
						/>
					</Link>
				)}
				buttonProps={{
					className: () => `w-full`
				}}
				contentProps={{
					className: 'transition-height duration-200 ease-out'
				}}
			></AccordionItem>

			<AccordionItem
				className={'w-full'}
				header={({ state: { isEnter } }) => (
					<Link
						href={'#'}
						onClick={handleClick}
						className={cn(
							'flex justify-between text-lg text-left px-5 font-bold w-full py-3 border border-light_green_border transition-all duration-200',
							{
								'rounded-2xl': !isEnter,
								'rounded-2xl border-transparent bg-white':
									isEnter
							}
						)}
					>
						<span>Windows</span>

						<img
							className={cn('rotate-320')}
							src='/images/icons/arrow-green-right.svg'
							alt=''
						/>
					</Link>
				)}
				buttonProps={{
					className: () => `w-full`
				}}
				contentProps={{
					className: 'transition-height duration-200 ease-out'
				}}
			></AccordionItem>
		</Accordion>
	)
}
