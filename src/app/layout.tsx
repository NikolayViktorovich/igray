import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { UnavailableServiceModal } from '@/components/user/common/modals/UnavailableServiceModal'

import Providers from './config/providers/Providers'
import './globals.css'

const onset = localFont({
	src: [
		{
			path: './fonts/Onest-Black.woff2',
			weight: '900',
			style: 'normal'
		},
		{
			path: './fonts/Onest-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: './fonts/Onest-ExtraBold.woff2',
			weight: '800',
			style: 'normal'
		},
		{
			path: './fonts/Onest-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: './fonts/Onest-SemiBold.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: './fonts/Onest-Regular.woff2',
			weight: '400',
			style: 'normal'
		}
	]
})

export const metadata: Metadata = {
	title: 'ИгРай',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${onset.className}`}>
				<Providers>{children}</Providers>

				{/* <h1 className='text-3xl font-steppe font-extrabold'>Более</h1> */}

				<UnavailableServiceModal />
			</body>
		</html>
	)
}
