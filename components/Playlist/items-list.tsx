import React from 'react'
import {PlaylistItem} from '../../utils/constants'
import Card from './item-types/card'

interface Props {
	items: PlaylistItem[]
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
		<div className="py-16 mb-8 grid gap-6 xl:gap-12 md:grid-cols-3">
			{renderItems()}
		</div>
	)
}
