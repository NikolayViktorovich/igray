import { FC } from 'react'

import type { Currencies } from '../model/types'

interface IProps {
  currency: Currencies
}

export const CommissionPanel: FC<IProps> = () => {
  return <div>Панель без комиссии</div>
}