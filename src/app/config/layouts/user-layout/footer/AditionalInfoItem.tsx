import Link from 'next/link'
import { FC } from 'react'

interface IProps {
	href: string
	label: string
}

export const AdditionalInfo: FC<IProps> = ({ href, label }) => {
	return (
		<li>
			<Link href={href} className='text-[12px] text-[#AFC5BE]'>
				{label}
			</Link>
		</li>
	)
}
