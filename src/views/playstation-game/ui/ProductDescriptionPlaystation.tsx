'use client'

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/shared/shadcn-ui/tabs'
import { Heading } from '@/shared/ui/Heading'
import { cn } from '@/shared/utils/clsx'

interface ProductDescriptionXboxProps {
	className?: string
}

export const ProductDescriptionPlaystation = (
	props: ProductDescriptionXboxProps
) => {
	const { className } = props

	return (
		<div
			className={cn(
				'p-6 lg:p-10 border border-primary_opacity_color rounded-xl_1',
				className
			)}
		>
			<Heading className='mb-6' level={2} size={'lg_2'}>
				Описание товара
			</Heading>

			<Tabs defaultValue='account' className='w-full'>
				<TabsList className='flex flex-col sm:flex-row sm:w-[296px] p-0.5 bg-bg_opacity_white rounded-xl border border-primary_opacity_color'>
					<TabsTrigger
						className='py-4 px-5 text-xs rounded-xl bg-none'
						value='account'
					>
						Описание
					</TabsTrigger>
					<TabsTrigger
						className='py-4 px-5 flex-grow text-xs rounded-xl bg-none'
						value='password'
					>
						Инструкция по активации
					</TabsTrigger>
				</TabsList>

				<div className='flex gap-1.5 flex-wrap mt-2.5 mb-6'>
					<span className='w-auto inline-flex items-center justify-between border border-border_gray rounded-xl px-5 py-2.5 text-gray_color text-xs'>
						Подписка
					</span>

					<span className='w-auto inline-flex items-center justify-between border border-border_gray rounded-xl px-5 py-2.5 text-gray_color text-xs'>
						Playstation
					</span>

					<span className='w-auto inline-flex items-center justify-between border border-border_gray rounded-xl px-5 py-2.5 text-gray_color text-xs'>
						Турция
					</span>
				</div>

				<TabsContent value='account'>
					<Heading className='mb-5' level={3} size='sm'>
						Описание
					</Heading>

					<div className='flex flex-col gap-5'>
						<div>
							<h4 className='mb-1.5 text-secondary_color font-bold'>
								Essential:
							</h4>

							<div className='text-xs font-medium'>
								<ul className='flex flex-col gap-1.5 list-disc pl-4'>
									<li>
										Бесплатные игры каждый месяц (обычно 2-3
										игры)
									</li>
									<li>
										Доступ к многопользовательскому режиму
										(для онлайн игр)
									</li>
									<li>Скидки на игры и дополнения</li>
								</ul>
							</div>
						</div>

						<div>
							<h4 className='mb-1.5 text-secondary_color font-bold'>
								Extra:
							</h4>

							<div className='text-xs font-medium'>
								<ul className='flex flex-col gap-1.5 list-disc pl-4'>
									<li>Все преимущества уровня Essential</li>
									<li>
										Доступ к каталогу игр на PS4 и PS5
										(более 400 игр)
									</li>
								</ul>
							</div>
						</div>

						<div>
							<h4 className='mb-1.5 text-secondary_color font-bold'>
								Deluxe:
							</h4>

							<div className='text-xs font-medium'>
								<ul className='flex flex-col gap-1.5 list-disc pl-4'>
									<li>
										Все преимущества уровней Essential и
										Extra
									</li>
									<li>
										Доступ к классическим играм на PS1, PS2,
										PS3 и PSP
									</li>
									<li>Доступ к пробным версиям игр</li>
									<li>
										Доступ к Классике Ubisoft+ ( Около 30-40
										игр в подписке )
									</li>
								</ul>
							</div>
						</div>

						<div>
							<h4 className='mb-1.5 text-secondary_color font-bold'>
								EA Play:
							</h4>
							<div className='text-xs font-medium'>
								<ul className='flex flex-col gap-1.5 list-disc pl-4'>
									<li>
										Подписчики EA Play получают доступ к
										большому количеству игр от их
										собственной студии
									</li>
									<li>
										Подписчики получают эксклюзивные скидки
										на игры, дополнения и внутриигровые
										покупки в магазине EA (например FC
										Points или NHL Points)
									</li>
								</ul>
							</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value='password'>
					<Heading className='mb-5' level={3} size='sm'>
						Инструкция по активации
					</Heading>

					<div className='flex flex-col gap-5'>
						<div>
							<h4 className='mb-1.5 text-secondary_color font-bold'>
								Полное наименование: 
							</h4>

							<div className='text-xs font-medium'>
								<ul>
									<li>
										КАК АКТИВИРОВАТЬ ПОДАРОЧНУЮ КАРТУ PS
										STORE?
									</li>
									<li>
										Войдите в PlayStation Store и нажмите на
										свой аватар в верхней части экрана.
									</li>
									<li>
										Выберите Погашение кодов в
										раскрывающемся меню.
									</li>
									<li>Введите код и нажмите Погасить.</li>
									<li>
										Средства или материалы будут добавлены в
										вашу учетную запись.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}
