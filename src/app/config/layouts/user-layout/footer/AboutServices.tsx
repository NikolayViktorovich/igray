'use client'

import Link from 'next/link'
import { ReactSVG } from 'react-svg'

export const AboutService = () => {
    return (
        <>
            <Link
                href={'http://www.youtube.com/@%D0%98%D0%B3%D1%80%D0%B0%D0%B924'}
                className="block h-[230px] sm:h-[280px] bg-[url('/images/about-service-mobile.png')] md:bg-[url('/images/video-bg.png')] bg-no-repeat bg-cover bg-center relative rounded-[34px] lg:rounded-[50px] w-full group hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
                <p className='absolute bottom-[40px] left-[40px] text-[white] text-[20px] md:text-[30px] leading-[25.2px] tracking-tight text-left underline-from-font decoration-skip-ink-none font-steppe font-medium'>
                    Посмотри <br /> видео <br /> о сервисе
                </p>

                <ReactSVG
                    className='absolute bottom-[35px] right-[25px] lg:top-[50%] lg:right-[35%] lg:left-[50%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2'
                    src='/images/icons/play-button.svg'
                />
            </Link>
        </>
    )
}