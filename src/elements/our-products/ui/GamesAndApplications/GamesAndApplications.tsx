'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { cn } from '@/shared/utils/clsx'

import styles from './GamesAndApplications.module.css'
import { ProductMenu } from '@/shared/ui/product-menu/ProductMenu'

interface AllXBoxProps {
	className?: string
	isMobile?: boolean
}

export const GamesAndApplications = (props: AllXBoxProps) => {
	const { className, isMobile = false } = props
	const router = useRouter()

	return (
		<button
			className={cn(styles.box, 'group', className)}
			onClick={() => {
				if (isMobile) {
					router.push(publicUrl.pc())
				}
			}}
			type='button'
		>
			<h3
				className={
					'font-steppe font-medium text-xl md:text-xl_2 max-w-[171px] md:max-w-[300px] text-white leading-[1.1]'
				}
			>
				Игры и&nbsp;приложения для&nbsp;PC
			</h3>

			<div
				className={
					'absolute right-0 top-[-10px] max-w-[140px] xs:max-w-[180px] md:max-w-[230px] lg:max-w-[200px] xl_1:max-w-[320px] min-h-[134px]'
				}
			>
				<Image
					width={365}
					height={265}
					src={'/images/home/pc-img.png'}
					alt={'Игры и приложения для PC'}
				/>
			</div>

			<ProductMenu className='hidden lg:block left-9 top-11 -translate-x-52 group-hover:-translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-200' />
		</button>
	)
}