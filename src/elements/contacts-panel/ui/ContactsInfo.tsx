import { cn } from '@/shared/utils/clsx'

import { IconSvg } from '@/shared/ui/Icon'

export interface SocialNetwork {
	iconName: string
	link: string
}

interface ContactsProps {
	title: string
	phone: string
	schedule: string
	email: string
	socialNetwork: SocialNetwork[]
	className?: string
}

export const ContactsInfo = (props: ContactsProps) => {
	const { title, phone, schedule, email, socialNetwork, className } = props

	return (
		<div
			className={cn(
				'bg-white rounded-xl_3 xl:w-[320px]  lg:rounded-xl_4 py-6 lg:py-8 px-5 lg:px-7 flex flex-col',
				className
			)}
		>
			<span className='block font-medium text-secondary_color mb-6 lg:mb-12'>
				{title}
			</span>

			<div className='mb-5 lg:mb-14'>
				<a
					className='inline-block font-bold text-2xl xs:text-xl_2 font-montserrat mb-1.5'
					href={`tel:${phone}`}
				>
					{phone}
				</a>

				<p className='font-montserrat font-medium text-secondary_gray_color text-xs mb-5'>
					{schedule}
				</p>

				<a href={`mailto:${email}`}>{email}</a>
			</div>

			<div className='flex gap-2.5 mt-auto'>
				{socialNetwork?.map(social => (
					<a
						key={social.iconName}
						className='group hover:bg-primary_color hover:border-primary_color w-12 h-12 flex items-center justify-center border border-light_green rounded-2xl transition-all'
						href={social.link}
						target='_blank'
					>
						<IconSvg
							id={social.iconName}
							className='text-bg_dark_color w-5 h-5 group-hover:text-white transition-all'
						/>
					</a>
				))}
			</div>
		</div>
	)
}
