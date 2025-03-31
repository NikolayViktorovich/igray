import Image from 'next/image'

interface NewsItemProps {
	content: string
	avatar: string
}

export const NewsItem = (props: NewsItemProps) => {
	const { content, avatar } = props

	return (
		<li className='flex gap-4 flex-col lg:flex-row justify-center items-center max-w-[240px] text-balance text-[16px]'>
			<div className='p-1 flex-shrink-0'>
				<Image
					className={'w-[96px] h-[96px] lg:w-[76px] lg:h-[76px]'}
					src={`/${avatar}`}
					height={96}
					width={96}
					alt='icon'
				/>
			</div>

			<p className='w-[180px] lg:w-auto text-center lg:text-left font-medium text-base leading-[1.2]'>
				{content}
			</p>
		</li>
	)
}
