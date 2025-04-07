import { publicUrl } from '@/app/config/routes/page-routes/public'

import { QuestionsAccordionList, questions } from '@/elements/faq-accordion'

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'
import { Heading } from '@/shared/ui/Heading'

export const Refund = () => {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'возврат', href: '' }
	]

	return (
		<>
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />

				<Heading className='mb-5 lg:mb-6' level={1}>
					Возврат оплаченного товара
				</Heading>

				<div className='max-w-[1000px] space-y-11 mb-20'>
					<div className='pb-12 border-b border-b-primary_opacity_color'>
						<h2 className='text-2xl mb-5'>
							Возврат купленного товара в магазине лицензионных
							ключей возможен:
						</h2>

						<ul className='font-medium space-y-3 list-disc pl-5'>
							<li>
								Вы&nbsp;оформили предварительный заказ.
								Не&nbsp;позднее чем за 3&nbsp;дня
								до&nbsp;момента релиза (далее на&nbsp;вас уже
								будет выкуплен товар у&nbsp;издателя)
								вы&nbsp;можете подать заявку на&nbsp;частичный
								возврат средств (т.е оплата комиссии платежной
								системы и&nbsp;платёжного агрегатора
								оплачивается покупателем).
							</li>

							<li>
								Товар не&nbsp;надлежащего качества, например
								ключ активации не&nbsp;работает. Но&nbsp;таких
								ситуаций не&nbsp;бывает :)
							</li>
						</ul>
					</div>

					<div className='pb-12 border-b border-b-primary_opacity_color'>
						<Heading className='text-2xl mb-5' level={2} size='md'>
							Почему нельзя вернуть уже полученный товар?
						</Heading>

						<ol className='font-medium space-y-3 list-decimal pl-5'>
							<li>
								Вы не вправе отказаться от товара надлежащего
								качества, имеющего индивидуально-определенные
								свойства, если указанный товар может быть
								использован исключительно приобретающим его
								покупателем. Это означает, что в случае
								активации цифрового ключа, идущего в комплекте с
								товаром, товар уже не может быть возвращен в
								магазин.
							</li>

							<li>
								Мы не можем проверить факт активации ключа,
								следовательно не можем выставить заведомо
								проблемный товар в магазин. Вам приятно купить и
								получить активированный ключ? Вот поэтому мы
								исключаем такие ситуации.
							</li>

							<li>
								Мы не можем продать ключ кому-то после вас,
								потому что Вы его видели. Вам бы хотелось
								приобрести ключ, который кто-то видел до вас и
								теоритически может объявить право на ваш
								аккаунт? Вот поэтому мы исключаем такие
								ситуации.
							</li>
						</ol>
					</div>

					<div>
						<Heading className='text-2xl mb-5' level={2} size='md'>
							Куда можно вернуть деньги?
						</Heading>

						<ol className='font-medium space-y-3 list-decimal pl-5'>
							<li>
								Подарочкая карта, которую далее можно будет
								потратить в нашем магазине
							</li>

							<li>Webmoney</li>

							<li>Счет мобильного телефона (+7......)</li>

							<li>STEAM-кошелёк</li>
						</ol>
					</div>
				</div>
			</Container>

			<div className='p-5 xs:p-7 lg:p-10 xl_1:p-16 rounded-2xl xs:rounded-xl_1 xl_1:rounded-xl_2 border'>
				<Heading className='mb-6' level={3} size='sm'>
					Частые вопросы
				</Heading>

				<QuestionsAccordionList items={questions} />
			</div>
		</>
	)
}
