'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
	isOpen: boolean
	isClose?: boolean
	children: ReactNode
	title?: string
	onClose?: () => void
}

export const ModalLayout = (props: ModalProps) => {
	const { isOpen, onClose, children, title, isClose = true } = props

	const modalRef = React.useRef<HTMLDivElement>(null)
	const contentRef = React.useRef<HTMLDivElement>(null)

	const [mounted, setMounted] = useState(false)

	const handleClose = (e: React.MouseEvent) => {
		if (
			modalRef.current &&
			!contentRef.current?.contains(e.target as Node)
		) {
			onClose?.()
		}
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return ReactDOM.createPortal(
		<AnimatePresence>
			{isOpen && (
				<motion.div
					ref={modalRef}
					className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					onClick={handleClose}
				>
					<motion.div
						ref={contentRef}
						className='bg-white rounded-xl_1 max-w-[400px] w-full p-6 shadow-lg'
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.95, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						{isClose && (
							<div className='flex justify-end'>
								<button
									type='button'
									className='text-2xl text-gray-600'
									onClick={onClose}
								>
									<img src='/x.svg' alt='' />
								</button>
							</div>
						)}

						<div className='flex justify-between items-center mb-4'>
							{title && (
								<h3 className='text-3xl font-extrabold'>
									{title}
								</h3>
							)}
						</div>

						<div className='mb-4'>{children}</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	)
}
