export type AdvantageServices = {
	title: string
	description: string
	icon: string
}

export const advantageServices: AdvantageServices[] = [
	{
		title: 'Вечная гарантия на купленные вами игры',
		description:
			'Для всех участников бонусной программы уровня SILVER, сразу поле получения уровня',
		icon: '/images/about-services/security-user.svg'
	},
	{
		title: 'Лицензионные цифровые ключи',
		description:
			'Покупай игры и получай бонусы с каждой своей покупки и трать на следующие покупки',
		icon: '/images/about-services/key.svg'
	},
	{
		title: 'Получение ключа в течении 5-10 минут',
		description:
			'Плати меньше комиссии за пополнение кошелька в Steam и получай экономию',
		icon: '/images/about-services/timer-start.svg'
	},
	{
		title: 'Более 10 000 довольных клиентов',
		description:
			'Получи индивидуальную скидку на все позиции в нашем каталоге ',
		icon: '/images/about-services/profile-2user.svg'
	}
]
