export const countTotalAmoutWithCommission = (
	price: string | number,
	commission: number,
	discount: number = 0
): number => {
	if (discount)
		return (
			Number(price) +
			Number(price) * (commission / 100) -
			(Number(price) + Number(price) * (commission / 100)) *
				(discount / 100)
		)
	else return Number(price) + Number(price) * (commission / 100)
}
