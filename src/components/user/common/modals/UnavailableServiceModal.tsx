'use client'

import { useEffect } from 'react'

import { ModalLayout } from './ModalLayout'
import { useServiceStore } from '@/shared/store/service.store'

export const UnavailableServiceModal = () => {
	const { isModalVisible, setIsModalVisible } = useServiceStore()

	function removeHash() {
		history.replaceState(null, '', ' ')
		setIsModalVisible(false)
	}

	useEffect(() => {
		if (isModalVisible) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [isModalVisible])

	return (
		<ModalLayout
			title={'Сервис недоступен'}
			onClose={removeHash}
			isOpen={isModalVisible}
		>
			<div className='flex justify-center flex-col'>
				<p className='text-[16px] leading-[19px] mb-[34px]'>
					Страница временно недоступна. Не переживайте, мы уже
					трудимся над решением проблемы.
				</p>
				<button
					className='bg-bg_color text-white py-[21px] w-full rounded-[18px]'
					onClick={removeHash}
				>
					Хорошо
				</button>
			</div>
		</ModalLayout>
	)
}
