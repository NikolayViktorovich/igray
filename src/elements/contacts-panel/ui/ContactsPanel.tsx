import { cn } from '@/shared/utils/clsx'

import { marketplaces, socialNetwork } from '../model/constants'

import { ContactsInfo } from './ContactsInfo'
import { MarketPlaceItem } from './MarketPlaceItem'

interface ContactsPanelProps {
	className?: string
}

export const ContactsPanel = (props: ContactsPanelProps) => {
	const { className } = props

	return (
		<div className={cn('xl:flex xl:gap-2.5', className)}>
			<div className='flex flex-col md:flex-row gap-3.5 mb-2.5 xl:mb-0 flex-shrink-0'>
				<ContactsInfo
					className='md:w-[50%]'
					title='Заказы'
					phone='+7 919 346-11-58'
					schedule='Пн - Вс:с 9:00-23:00 по МСК'
					email='igraem247@gmail.com'
					socialNetwork={socialNetwork}
				/>

				<ContactsInfo
					className='md:w-[50%] '
					title='Сотрудничество'
					phone='+7 919 346-11-58'
					schedule='Пн - Вс:с 9:00-23:00 по МСК'
					email='igraem247@gmail.com'
					socialNetwork={socialNetwork.slice(1)}
				/>
			</div>

			<div className='grid grid-cols-2 gap-2.5 xl:grid-cols-3 xl:w-full'>
				{marketplaces.map(marketplace => (
					<MarketPlaceItem
						key={marketplace.name}
						name={marketplace.name}
						iconName={marketplace.iconName}
						link={marketplace.link}
					/>
				))}
			</div>
		</div>
	)
}
