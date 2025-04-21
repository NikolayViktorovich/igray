'use client'

import { FC, useRef } from 'react'
import { ReactSVG } from 'react-svg'

interface IProps {
	classNameDiv?: string
	classNameInput?: string
}

export const SearchPanel: FC<IProps> = () => {
	const ref = useRef<HTMLInputElement>(null)

	return (
		<div className='hidden md:block'>
			<div className='relative'>
				<button onClick={() => ref.current?.focus()} type='button'>
					<ReactSVG
						src='/images/icons/search.svg'
						className='cursor-pointer absolute left-5 top-1/2 -translate-y-1/2'
					/>
				</button>

				<input
					ref={ref}
					className={`border-[2px] hover:border-secondary_color transition-border duration-200 focus:border-secondary_color border-light_green w-full py-3 pr-4 text-lg rounded-[18px] outline-none pl-12 bg-transparent text-primary_color placeholder:text-gray_color lg:w-[390px]`}
					placeholder='Быстрый поиск...'
					type='text'
				/>
			</div>
		</div>
	)
}
