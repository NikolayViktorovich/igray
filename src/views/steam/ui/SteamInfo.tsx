import Image from 'next/image'

import { SpeedPaymentBanner } from './SpeedPaymentBanner'
import { SteamBanner } from './SteamBanner'

interface IArticle {
	content: string
	avatar: string
}

export const SteamInfo = () => {
	const articles: IArticle[] = [
		{
			content: 'Как пополнить свой Steam бесплатно?',
			avatar: 'images/articles/img1.png'
		},
		{
			content: 'Что было на презентации Xbox 2024',
			avatar: 'images/articles/img2.png'
		},
		{
			avatar: 'images/articles/img3.png',
			content: 'Магический выживач Nightingale'
		}
	]

	return (
		<section className='flex justify-center 2xl:block gap-[5px] 2xl:gap-0 '>
			<div className='flex gap-3 items-center md:mx-auto w-full md:max-w-[900px]'>
				<SteamBanner />
				<SpeedPaymentBanner className='hidden md:block 2xl:hidden' />
			</div>

			<ul className='hidden 2xl:visible 2xl:flex 2xl:flex-col 2xl:gap-2 border border-[#1f3238] rounded-[60px] border-opacity-10 py-[60px] w-full pl-[60px] pr-[30px]]'>
				{articles.map(article => (
					<li
						key={article.avatar}
						className='flex gap-4 flex-col md:flex-row justify-center items-center w-[307px] text-balance text-[16px] '
					>
						<div className='p-1 flex-shrink-0'>
							<Image
								className={
									'w-[96px] h-[96px] lg:w-[76px] lg:h-[76px]'
								}
								src={`/${article.avatar}`}
								height={96}
								width={96}
								alt='icon'
							/>
						</div>

						<p className='w-[180px] lg:w-auto text-center md:text-left font-medium leading-[1.2]'>
							{article.content}
						</p>
					</li>
				))}
			</ul>
		</section>
	)
}
