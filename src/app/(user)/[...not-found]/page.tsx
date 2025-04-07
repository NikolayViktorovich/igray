import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'

export default function NotFound() {
	return (
		<section>
			<Container>
				<div className='mb-[100px] flex justify-between items-center'>
					<div>
						<Heading className='mb-10' level={1}>
							Страница, которую&nbsp;Вы ищете, не&nbsp;может быть
							найдена
						</Heading>
						<p className='text-[18px] font-normal mb-[32px] text-gray-800'>
							Возможно, вы&nbsp;перешли по&nbsp;ссылке,
							в&nbsp;которой была допущена ошибка, или ресурс был
							удален. Попробуйте перейти на&nbsp;главную страницу
						</p>
						<Link
							href={'/'}
							className='w-[98%] py-[21px] md:w-[50%] mb-[21px] sm:mb-0 bg-bg_color block text-white text-center rounded-[18px] '
						>
							Перейти на главную
						</Link>
					</div>
					<Image
						className='hidden xl:block'
						src={'/images/icons/404.svg'}
						alt='404'
						width={500}
						height={500}
					/>
				</div>
			</Container>
		</section>
	)
}
