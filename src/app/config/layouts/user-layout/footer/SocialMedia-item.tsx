'use client'

import Link from 'next/link'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'

interface IProps {
	svg: string
	name: string
	href: string
}

export const SocialMediaItem: FC<IProps> = ({ svg, name, href }) => {
	return (
		<li
			className={`h-[80px] w-[80px] lg:w-[90px] lg:h-[90px] justify-self-center p-[5px] bg-white flex items-center justify-center content-center rounded-[24px] transition-all duration-300 border-[white] active:border-secondary_color hover:border-secondary_color border-2 `}
		>
			<Link href={href} className='flex flex-col items-center'>
				<ReactSVG
					className='mb-[15px]'
					height={20}
					width={20}
					src={`/${svg}`}
				/>
				<p className='text-center text-[12px] text-gray-800'>{name}</p>
			</Link>
		</li>
	)
}
