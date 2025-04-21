'use client'

import ReactPaginate from 'react-paginate'

interface OrderPaginationProps {
	onClickPage: (page: number) => void
	count: number
}

export const OrderPagination = (props: OrderPaginationProps) => {
	const { onClickPage, count } = props

	return (
		<ReactPaginate
			disabledClassName={'red-500'}
			nextLabel='>'
			previousLabel='<'
			onPageChange={test => onClickPage(test.selected)}
			pageRangeDisplayed={3}
			marginPagesDisplayed={2}
			pageCount={count}
			pageClassName=''
			pageLinkClassName='block w-7 rounded-lg text-center hover:bg-black hover:text-white transition-all duration-200'
			previousClassName=''
			previousLinkClassName='page-link'
			nextClassName='page-item'
			nextLinkClassName='page-link'
			// breakLabel='...'
			breakClassName='page-item'
			breakLinkClassName=''
			containerClassName='flex gap-2'
			activeClassName='bg-black text-white rounded-lg'
			renderOnZeroPageCount={null}
		/>
	)
}
