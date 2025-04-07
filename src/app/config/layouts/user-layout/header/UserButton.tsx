import Link from 'next/link'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'

interface IProps {
	path: string
	className?: string
}

export const UserButton: FC<IProps> = ({ path }) => (
	<li>
		<Link href='#'>
			<div className='flex  border-opacity-0  transition-border duration-100  hover:border-opacity-100 hover:border-[1px]  hover:border-secondary_color items-center justify-center p-[4px] sm:p-[10px] rounded-[18px] bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] w-9 md:w-[58px] h-full'>
				<ReactSVG src={`/${path}`} />
			</div>
		</Link>
	</li>
)
