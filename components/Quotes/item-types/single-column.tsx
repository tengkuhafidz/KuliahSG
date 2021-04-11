import {QuoteItem} from '../../../utils/constants'

interface Props {
	item: QuoteItem
	favouriteIds: number[]
	toggleFavourite: (id: number) => void
}

export default function SingleColumn({
	item,
	favouriteIds,
	toggleFavourite,
}: Props) {
	const {id, message, sourceTitle, sourceUrl, language} = item
	// const isFavourite = favouriteIds.includes(id)

	return (
		<div className="shadow-lg rounded-xl hover:shadow-xl max-w-xl mx-auto bg-white mb-12">
			<div className="py-16 px-8">{message}</div>
		</div>
	)
}
