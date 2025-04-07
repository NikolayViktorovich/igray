import { publicUrl } from '@/app/config/routes/page-routes/public'

import { NavItem } from '../header/NavItem'

export const FooterNavigation = () => {
	return (
		<nav className='hidden lg:block'>
			<ul className='flex gap-[27px]   flex-wrap '>
				<NavItem
					className='hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
					label={'Бонусы'}
					href={'#'}
				/>

				<NavItem
					className='hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
					label={'Подарочный сертификат'}
					href={'#'}
				/>
				<NavItem
					className='hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
					label={'О сервисе'}
					href={publicUrl.aboutServices()}
				/>
				<NavItem
					className='hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
					label={'Партнерам'}
					href={'#'}
				/>
				<NavItem
					className='hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
					label={'Блог'}
					href={'#'}
				/>
				<NavItem
					className='hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
					label={'Возврат'}
					href={publicUrl.refund()}
				/>
				<NavItem
					className='hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
					label={'Вопросы'}
					href={publicUrl.frequentQuestions()}
				/>
				<NavItem
					className='hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
					target={'_blank'}
					label={'Контакты'}
					href={publicUrl.contacts()}
				/>
			</ul>
		</nav>
	)
}
