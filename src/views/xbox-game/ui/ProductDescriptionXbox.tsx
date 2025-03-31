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

export const ProductDescriptionXbox = (props: ProductDescriptionXboxProps) => {
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
						Xbox Game Pass
					</span>

					<span className='w-auto inline-flex items-center justify-between border border-border_gray rounded-xl px-5 py-2.5 text-gray_color text-xs'>
						Xbox
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
								Xbox Game Pass Ultimate
							</h4>

							<div className='text-xs font-medium'>
								<p>
									Xbox Game Pass Ultimate — это универсальный
									сервис, включающий в себя три подписки: Xbox
									Live Core, Game Pass для консолей и ПК. Это
									значит, что пользователь может играть по
									сети, ежемесячно получать игры по подписке
									Gold, а также ему доступны обе библиотеки
									Game Pass — и на консолях Xbox, и на ПК.
								</p>
							</div>
						</div>

						<div>
							<h4 className='mb-1.5 text-secondary_color font-bold'>
								Некоторые особенности подписки Xbox Game Pass
								Ultimate
							</h4>

							<div className='text-xs font-medium'>
								<ul className='flex flex-col gap-1.5 list-disc pl-4'>
									<li>
										Возможность играть в новинки с первого
										дня их выхода. Доступ к сотням
										высококачественных игр на консоли и ПК.
									</li>
									<li>Подписка EA Play.</li>
									<li>
										Многопользовательский режим игры по сети
										на консоли. Облачный игровой сервис.
									</li>
									<li>
										Скидки, награды и бонусы для
										подписчиков.
									</li>
								</ul>
							</div>
						</div>

						<div>
							<h4 className='mb-1.5 text-secondary_color font-bold'>
								Функция стриминга на мобильные устройства
							</h4>

							<div className='text-xs font-medium'>
								<p>
									Функция стриминга на мобильные устройства —
									пользователь может запускать на своих
									Android-устройствах игры из библиотеки Game
									Pass.
								</p>
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
								<p>
									Активируется с помощью нескольких ключей,
									который должны быть активированы строго в
									указанном порядке.
								</p>
								<p>
									Xbox Game Pass — это подписочный сервис от
									Microsoft, который дает доступ к обширной
									библиотеке игр на Xbox и ПК. Эта подписка
									позволяет играть в сотни популярных игр без
									необходимости их покупать.
								</p>
								<p>
									На этой странице представлена подписка для
									региона RU/TR на 12 месяцев. В неё НЕ входит
									доступ к EA Play.
								</p>
							</div>
						</div>

						<div>
							<h4 className='mb-1.5 text-secondary_color font-bold'>
								Полное наименование: 
							</h4>

							<div className='text-xs font-medium'>
								<p>Xbox Game Pass Ultimate 12 Month Турция</p>
							</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}
