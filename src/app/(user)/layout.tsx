import { Container } from '@/shared/ui/Container'
import { cn } from '@/shared/utils/clsx'

import { Footer } from '../config/layouts/user-layout/Footer'
import { Header } from '../config/layouts/user-layout/Header'
import { Reviews } from '../config/layouts/user-layout/footer/Reviews'

import styles from './user.module.css'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div
			className={cn('pt-5 pb-5', styles.backgroundMain)}
			style={{
				background: "/images/background.jpg')"
			}}
		>
			<Container size='xl'>
				<Header />

				<main className='mb-20'>{children}</main>

				<Reviews />
				<Footer />
			</Container>
		</div>
	)
}
