import { Container } from '@/shared/ui/Container'
import { cn } from '@/shared/utils/clsx'
import { news } from '../model/constants'
import { NewsItem } from './NewsItem'

interface NewsListProps {
    className?: string
}

export const NewsList = (props: NewsListProps) => {
    const { className } = props

    return (
        <Container>
            <ul
                className={cn(
                    'flex flex-row gap-1 lg:gap-4 mx-auto items-start max-w-[1311px] w-full overflow-x-auto',
                    className
                )}
            >
                {news?.map(article => (
                    <NewsItem
                        key={article.content}
                        content={article.content}
                        avatar={article.avatar}
                    />
                ))}
            </ul>
        </Container>
    )
}