import { useRef } from 'react'
import { ReactSVG } from 'react-svg'

interface FaqItemSteamProps {
	title: string
	content: string
	isActive: boolean
	onClick: () => void
	paddingBottom?: string
}

export const FaqItem = ({
	title,
	content,
	isActive,
	onClick,
	paddingBottom
}: FaqItemSteamProps) => {
	const contentRef = useRef<HTMLDivElement | null>(null)

	return (
		<li
			className={`group bg-white rounded-[18px] overflow-hidden pl-[20px] 2xl:w-[300px] transition-all duration-300 ease-in-out ${
				isActive ? 'shadow-lg scale-[1.02] border-[2px]' : ''
			}`}
			style={{
				borderColor: isActive ? '#66D8AD' : 'transparent',
				marginBottom: '8px'
			}}
		>
			<div
				className='cursor-pointer py-2 pr-[5px] flex gap-2 justify-between items-center'
				onClick={onClick}
			>
				<p className='text-sm font-medium '>{title}</p>
				<button className='rounded-[12px] border border-transparent group-hover:border-secondary_color transition-border duration-300 bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] p-3'>
					<ReactSVG src='/images/icons/arrow-up-right.svg' />
				</button>
			</div>
			<div
				ref={contentRef}
				className={`transition-all duration-300 ease-in-out ${
					isActive
						? 'max-h-[1000px] opacity-100'
						: 'max-h-0 opacity-0'
				}`}
				style={{
					maxHeight:
						isActive && contentRef.current
							? `${contentRef.current.scrollHeight}px`
							: '0px' // Устанавливаем высоту только если элемент активен
				}}
			>
				<div
					className={`pt-3 ${
						paddingBottom ? paddingBottom : 'pb-2'
					} pr-2 text-gray-800 bg-white rounded-[18px]`}
					style={{
						borderColor: isActive ? '#66D8AD' : 'transparent' // Для активного состояния
					}}
				>
					{content}
				</div>
			</div>
		</li>
	)
}
