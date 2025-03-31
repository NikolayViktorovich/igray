interface IconProps {
	className?: string
	id: string
}

export const IconSvg = (props: IconProps) => {
	const { className, id } = props
	const timestamp = Date.now()

	return (
		<svg className={className}>
			<use
				xlinkHref={`/images/icons/icons-sprite.svg?v=${timestamp}#${id}`}
			/>
		</svg>
	)
}
