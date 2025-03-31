'use client'

import { useState } from 'react'

import styles from './ProccesingPersonalDataPanel.module.css'

interface ProccesingPersonalDataPanelProps {
	checked?: boolean
	onChange?: (checked: boolean) => void
	text: string
}

export const ProccesingPersonalDataPanel = (
	props: ProccesingPersonalDataPanelProps
) => {
	const { checked, text } = props
	const [isChecked] = useState(checked)

	const handleChange = () => {}

	return (
		<label className='flex items-center justify-center gap-2 cursor-pointer'>
			<div className={styles.container}>
				<input
					type='checkbox'
					checked={isChecked}
					onChange={handleChange}
					className={styles.checkbox}
				/>

				<span className={styles.checkmark}></span>
			</div>

			<span className={styles.text}>{text}</span>
		</label>
	)
}
