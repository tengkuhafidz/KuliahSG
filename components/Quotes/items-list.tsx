import React from 'react'
import {QuoteItem} from '../../utils/constants'
import Card from './item-types/card'

interface Props {
	items: QuoteItem[]
	favouriteIds: number[]
	toggleFavourite: (id: number) => void
}

export default function ItemsList({
	items,
	favouriteIds,
	toggleFavourite,
}: Props) {
	const renderItems = () => {
		return items.map(item => (
			<Card
				item={item}
				key={item.id}
				favouriteIds={favouriteIds}
				toggleFavourite={toggleFavourite}
			/>
		))
	}

	return (
		<div className="py-16 mb-8 grid gap-8 xl:gap-12 md:grid-cols-2">
			{renderItems()}
		</div>
	)
}
