import { FC } from 'react'

import { symbols } from '@/shared/constants/symbols'

import type { Currencies } from '../model/types'

interface IProps {
	currency: Currencies
}

export const CommissionPanel: FC<IProps> = ({ currency }) => {
	const commissions = {
		RUB: [
			{
				commission: 22,
				price: 100
			},
			{
				commission: 20,
				price: 1000
			},
			{
				commission: 18,
				price: 3000
			}
		],
		KZT: [
			{
				commission: 22,
				price: 500
			},
			{
				commission: 20,
				price: 5000
			},
			{
				commission: 18,
				price: 15000
			}
		],
		USD: [
			{
				commission: 22,
				price: 5
			},
			{
				commission: 20,
				price: 10
			},
			{
				commission: 18,
				price: 30
			}
		]
	}

  return (
    <>
    </>
  )
}