import { Metadata } from 'next'
import Link from 'next/link'
import { publicUrl } from '@/app/config/routes/page-routes/public'

export const metadata: Metadata = {
    title: 'Политика конфиденциальности - Igray24',
    description: 'Ознакомьтесь с нашей политикой конфиденциальности, чтобы узнать, как мы обрабатываем и защищаем ваши данные.'
}

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Кнопка "Назад" */}
            <Link href={publicUrl.home()} className="inline-block mb-6" title="Назад на главную">
                <div className="w-10 h-10 rounded-full bg-transparent border-2 border-gray-500 flex items-center justify-center hover:border-secondary_color transition-colors duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-500 hover:text-secondary_color transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
            </Link>

            <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>
            <section className="prose max-w-none">
                <p className="mb-4">
                    Добро пожаловать на страницу политики конфиденциальности Igray24. Мы ценим вашу конфиденциальность и стремимся защищать ваши персональные данные.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Сбор данных</h2>
                <p className="mb-4">
                    Мы собираем информацию, которую вы предоставляете при регистрации, покупке или взаимодействии с нашим сайтом. Это может включать ваше имя, адрес электронной почты и платежные данные.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Использование данных</h2>
                <p className="mb-4">
                    Собранные данные используются для обработки заказов, улучшения наших услуг и связи с вами по поводу ваших покупок или акций.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Защита данных</h2>
                <p className="mb-4">
                    Мы применяем современные меры безопасности для защиты ваших данных от несанкционированного доступа, включая шифрование и безопасные серверы.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Контакты</h2>
                <p className="mb-4">
                    Если у вас есть вопросы по поводу нашей политики конфиденциальности, свяжитесь с нами по адресу: support@igray24.com.
                </p>
            </section>
        </div>
    )
}