import Link from 'next/link'

interface Breadcrumb {
	label: string
	href: string
}

interface BreadcrumbsProps {
	breadcrumbs: Breadcrumb[]
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
	return (
		<nav className='py-4 pt-2 border-t xl:border-none border-t-light_green_border flex items-center space-x-2 text-xs text-gray_color'>
			{breadcrumbs.map((breadcrumb, index) => (
				<div key={breadcrumb.href} className='flex items-center'>
					{index < breadcrumbs.length - 1 ? (
						<Link href={breadcrumb.href}>{breadcrumb.label}</Link>
					) : (
						<span>{breadcrumb.label}</span>
					)}

					{index < breadcrumbs.length - 1 && (
						<span className='mx-2 text-gray_color'>
							<img src='/images/icons/breadcrumbs.svg' alt='' />
						</span>
					)}
				</div>
			))}
		</nav>
	)
}
