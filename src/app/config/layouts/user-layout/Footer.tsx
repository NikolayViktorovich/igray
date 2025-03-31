'use client'

import { useRef } from 'react'
import { ReactSVG } from 'react-svg'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { FooterAdditionalInfo } from './footer/FooterAdditionalInfo'
import { FooterNavigation } from './footer/FooterNavigation'
import { PlatformsList } from './footer/PlatformList'
import { SocialMediaList } from './footer/SocialMedia'

export const Footer = () => {
	const ref = useRef<HTMLInputElement>(null)

	return (
		<footer>
			<div className='gap-[30px] md:gap-[70px] flex flex-wrap md:flex-nowrap w-full mb-11'>
				<div className='items-center w-full md:max-w-[390px]'>
					<div className='relative md:mb-14'>
						<button
							className='cursor-pointer absolute left-5 top-1/2 -translate-y-1/2'
							onClick={() => ref.current?.focus()}
							type='button'
						>
							<ReactSVG src='/images/icons/search-big.svg' />
						</button>

						<input
							ref={ref}
							className={`border-[1px] hover:border-secondary_color transition-border duration-100 focus:border-secondary_color border-light_green w-full py-4 pr-4 text-lg rounded-[18px] outline-none pl-14 bg-transparent text-primary_color placeholder:text-gray_color lg:w-[390px]`}
							placeholder='Быстрый поиск...'
							type='text'
						/>
					</div>

					<SocialMediaList className='hidden md:grid gap-y-2 gap-x-8 md:gap-x-[10px]' />
				</div>

				<div className='mx-auto lg:mx-0 lg:flex lg:flex-col lg:justify-between lg:gap-6'>
					<FooterNavigation />

					<div className='grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-[25px] md:gap-[65px]'>
						<PlatformsList
							title='Играй'
							options={[
								'Бонусы',
								'О сервисе',
								'Партнерам',
								'Блог',
								'Возврат',
								'Вопросы',
								'Контакты'
							]}
							hrefs={[
								'#',
								publicUrl.aboutServices(),
								'#',
								'#',
								publicUrl.refund(),
								publicUrl.frequentQuestions(),
								publicUrl.contacts()
							]}
							className='block md:hidden'
						/>

						<PlatformsList
							title='PC'
							hrefs={[publicUrl.steam(), '#', '#', '#', '#']}
							options={[
								'Steam',
								'Battle NET',
								'Epic Games',
								'Microsoft Office',
								'Windows'
							]}
						/>

						<PlatformsList
							hrefs={['#', publicUrl.xboxGame(), '#', '#']}
							title='Xbox'
							options={[
								'Игры',
								'Подписки',
								'Консоли',
								'Аксессуары'
							]}
						/>

						<PlatformsList
							hrefs={['#', publicUrl.playstationGame(), '#', '#']}
							title='PlayStation'
							options={[
								'Игры',
								'Подписки',
								'Консоли',
								'Аксессуары'
							]}
						/>

						<PlatformsList
							hrefs={['#', '#']}
							title='Nintendo'
							options={['Пополнение кошелька', 'Подписки']}
						/>
						<PlatformsList
							hrefs={['#']}
							title='Mobile'
							options={['Apple Itunes']}
						/>
					</div>

					<SocialMediaList className='grid md:hidden mt-11 w-[350px] gap-y-4 mx-auto mb-2 md:mb-0 md:gap-3' />
				</div>
			</div>
			<FooterAdditionalInfo />
		</footer>
	)
}
