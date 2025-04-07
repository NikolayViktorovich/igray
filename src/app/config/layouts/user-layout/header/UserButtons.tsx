'use client'

import { ReactSVG } from 'react-svg'

import { UserButton } from './UserButton'

export const UserButtons = () => {
	return (
		<ul className='flex gap-2'>
			<li className='md:hidden'>
				<button className='flex  border-opacity-0  transition-border duration-100  hover:border-opacity-100 hover:border-[1px]  hover:border-secondary_color items-center justify-center p-[4px] sm:p-[10px] rounded-[18px] bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] w-9 md:w-[58px] h-full'>
					<ReactSVG src={`images/icons/lupa.svg`} />
				</button>
			</li>

			<UserButton className='' path='images/icons/HeartStraight.svg' />
			<UserButton className='' path='images/icons/user.svg' />
			<UserButton className='' path='images/icons/ShoppingCart.svg' />
		</ul>
	)
}
