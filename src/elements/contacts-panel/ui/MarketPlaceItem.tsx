import Image from 'next/image'

interface MarketPlaceItemProps {
	name: string
	iconName: string
	link: string
}

export const MarketPlaceItem = (props: MarketPlaceItemProps) => {
	const { name, iconName, link } = props

	return (
		<div className='flex items-center flex-col pt-7 px-2.5 pb-5 rounded-xl_3 lg:rounded-xl_4 bg-white xl:w-full'>
			<Image width={111} height={30} alt={iconName} src={iconName} />

			<div className='flex flex-col gap-1.5 items-center mt-auto'>
				<span className='text-bg_dark_color text-xs'>{name}</span>

				<a
					className='text-secondary_color font-medium'
					href={link}
					target='_blank'
				>
					Смотреть
				</a>
			</div>
		</div>
	)
}
