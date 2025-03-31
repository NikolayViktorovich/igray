import { FC } from 'react'

import { SocialMediaItem } from './SocialMedia-item'

interface IProps {
	className: string
}

export const SocialMediaList: FC<IProps> = ({ className }) => {
	return (
		<ul className={`grid-rows-2 grid-cols-4 ${className}`}>
			<SocialMediaItem
				href='https://aliexpress.ru/store/1100219963?spm=a2g38.sc_product_list.0.0.252d2304G11LgS'
				svg={'images/icons/aliexpress.svg'}
				name={'Aliexpress'}
			/>
			<SocialMediaItem
				href='https://plati.market/seller/x-shop-174/1050934/'
				svg={'images/icons/plati-icon.svg'}
				name={'Plati.ru'}
			/>
			<SocialMediaItem
				href='https://t.me/Igray24_bot'
				svg={'images/icons/tg.svg'}
				name={'Telegram'}
			/>
			<SocialMediaItem
				href='https://avito.ru/brands/igray24'
				svg={'images/icons/avito.svg'}
				name={'Avito'}
			/>
			<SocialMediaItem
				href='https://www.youtube.com/@%D0%98%D0%B3%D1%80%D0%B0%D0%B924'
				svg={'images/icons/yt.svg'}
				name={'YouTube'}
			/>
			<SocialMediaItem
				href='https://vk.com/igray24'
				svg={'images/icons/vk.svg'}
				name={'Вконтаке'}
			/>
			<SocialMediaItem
				href='https://api.whatsapp.com/send/?phone=79193461158&text&type=phone_number&app_absent=0  '
				svg={'images/icons/whatsapp.svg'}
				name={'WhatsApp'}
			/>
			<SocialMediaItem
				href='https://www.wildberries.ru/seller/833104'
				svg={'images/icons/wb-icon.svg'}
				name={'WildBerries'}
			/>
		</ul>
	)
}
