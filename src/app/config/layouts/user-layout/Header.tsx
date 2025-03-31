import Image from 'next/image'
import Link from 'next/link'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { SearchPanel } from './SearchPanel'
import { Navigation } from './header/Navigation'
import { UserButtons } from './header/UserButtons'
import { navigations } from '@/shared/constants/navigations'

export const Header = () => {
	return (
		<header className='max-w-[1360px] mb-[13px] mx-auto w-full'>
			<div className='flex items-center rounded-[40px] justify-between px-[12px] py-[10px] md:p-[20px] bg-white md:gap-[15px] mb-[10px] gap-[15px]'>
				<Link href={publicUrl.home()}>
					<Image
						className='w-[150px] lg:w-[210px]'
						width={150}
						height={200}
						alt='logo'
						src='/images/icons/logo.svg'
					/>
				</Link>

				{/* Desktop menu */}
				<Navigation
					items={navigations.map(item =>
						item.label === 'PC' ? { ...item, href: '#' } : item
					)}
					className='hidden xl:flex xl:gap-[25px] 2xl:gap-[30px] xs:gap-[5px]'
				/>

				<div className='flex gap-3 flex-shrink-0'>
					<SearchPanel />

					<UserButtons />
				</div>
			</div>

			{/* Mobile menu */}
			<Navigation
				items={navigations.map(item =>
					item.label === 'PC'
						? { ...item, href: publicUrl.pc() }
						: item
				)}
				className='flex justify-between w-full max-w-[500px] xl:hidden mx-auto'
			/>
		</header>
	)
}
