'use client'

import { useRef, useMemo } from 'react'
import { ReactSVG } from 'react-svg'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { FooterAdditionalInfo } from './footer/FooterAdditionalInfo'
import { FooterNavigation } from './footer/FooterNavigation'
import { PlatformsList } from './footer/PlatformList'
import { SocialMediaList } from './footer/SocialMedia'

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null)

    return (
        <div className='relative'>
            <button
                className='cursor-pointer absolute left-5 top-1/2 -translate-y-1/2'
                onClick={() => ref.current?.focus()}
                type='button'
            >
                <ReactSVG src='/images/icons/search-big.svg' />
            </button>

            <input
                ref={ref}
                className={`border-2 border-gray-375 hover:border-secondary_color focus:border-secondary_color w-full py-4 pr-4 text-lg rounded-[18px] outline-none pl-14 bg-transparent text-primary_color placeholder:text-gray_color lg:w-[390px] transition-all duration-100`}
                placeholder='Быстрый поиск...'
                type='text'
            />
        </div>
    )
}

export const Footer = () => {
    const platformsListOptions = useMemo(() => {
        return [
            {
                title: 'PC',
                options: ['Steam', 'Battle NET', 'Epic Games', 'Microsoft Office', 'Windows'],
                hrefs: [publicUrl.steam(), '#', '#', '#', '#'],
            },
            {
                title: 'Xbox',
                options: ['Игры', 'Подписки', 'Консоли', 'Аксессуары'],
                hrefs: ['#', publicUrl.xboxGame(), '#', '#'],
            },
            {
                title: 'PlayStation',
                options: ['Игры', 'Подписки', 'Консоли', 'Аксессуары'],
                hrefs: ['#', publicUrl.playstationGame(), '#', '#'],
            },
            {
                title: 'Nintendo',
                options: ['Пополнение кошелька', 'Подписки'],
                hrefs: ['#', '#'],
            },
            {
                title: 'Mobile',
                options: ['Apple Itunes'],
                hrefs: ['#'],
            },
        ]
    }, [])

    return (
        <footer>
            <div className='gap-[30px] md:gap-[70px] flex flex-wrap md:flex-nowrap w-full mb-11'>
                <div className='w-full md:max-w-[390px]'>
                    <SearchInput />
                    <SocialMediaList className='grid gap-y-4 gap-x-4 mt-6' />
                </div>

                <div className='mx-auto lg:mx-0 lg:flex lg:flex-col lg:justify-between lg:gap-6'>
                    <FooterNavigation />

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-[25px] md:gap-[65px]'>
                        {platformsListOptions.map((list) => (
                            <PlatformsList
                                key={list.title}
                                title={list.title}
                                options={list.options}
                                hrefs={list.hrefs}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <FooterAdditionalInfo />
        </footer>
    )
}