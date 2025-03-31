'use client'

import Link from 'next/link'
import React, { FC } from 'react'

import { cn } from '@/shared/utils/clsx'

import { useServiceStore } from '@/shared/store/service.store'
import { ProductMenu } from '@/shared/ui/product-menu/ProductMenu'

interface IProps {
	label: string
	href: string
	className?: string
	target?: '_blank' | '_self'
	isChildrenNavigation?: boolean
}

export const NavItem: FC<IProps> = ({ label, href, className }) => {
	// const [isMenu, setIsMenu] = useState(false)

	const ref = React.useRef(null)
	// const subMenuRef = React.useRef(null)

	const { setIsModalVisible } = useServiceStore()

	// useEffect(() => {
	// 	if (isHovering || isHoveringSubMenu) {
	// 		setIsMenu(true)
	// 	} else {
	// 		setIsMenu(false)
	// 	}
	// }, [isHovering, isHoveringSubMenu])

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsModalVisible(href === '#' && true)
	}

	return (
		<li ref={ref} className={cn(className, `group relative z-10`)}>
			<Link
				onClick={handleClick}
				className={cn(
					'block transition-colors duration-300 group-hover:text-secondary_color hover:text-secondary_color md:text-lg py-2',
					{
						'xl:pointer-events-none': label === 'PC'
					}
				)}
				href={href}
			>
				{label}
			</Link>

			{label === 'PC' && (
				<ProductMenu className='-left-6 top-11 hidden xl:group-hover:block transition-all duration-200 group-hover:shadow-primary_bg' />
			)}
		</li>
	)
}
