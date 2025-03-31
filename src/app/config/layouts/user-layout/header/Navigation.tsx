'use client'

import { NavItem } from './NavItem'
import { NavigationItem } from '@/shared/constants/navigations'

interface NavigationProps {
	className?: string
	items: NavigationItem[]
}

export const Navigation = (props: NavigationProps) => {
	const { className, items } = props

	return (
		<>
			<ul className={`${className}`}>
				{items.map((item, idx) => (
					<NavItem href={item.href} label={item.label} key={idx} />
				))}
			</ul>
		</>
	)
}
