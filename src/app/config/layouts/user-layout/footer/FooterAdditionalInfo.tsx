// components/footer/FooterAdditionalInfo.tsx
import { AdditionalInfo } from './AditionalInfoItem'
import { publicUrl } from '@/app/config/routes/page-routes/public'

export const FooterAdditionalInfo = () => {
    const items = [
        {
            label: 'Copyright © 2024 Igray24. Все права защищены.',
            href: '#',
        },
        {
            label: 'Контакты',
            href: publicUrl.contacts(),
        },
        {
            label: 'Оферта и политика конфиденциальности',
			href: publicUrl.privacyPolicy(),
        },
        {
            label: 'Условия использования',
            href: publicUrl.terms(),
        },
    ]

    return (
        <ul className='flex gap-x-5 md:gap-[24px] flex-wrap'>
            {items.map((item, idx) => (
                <AdditionalInfo href={item.href} label={item.label} key={idx} />
            ))}
        </ul>
    )
}