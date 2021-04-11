import {useEffect, useState} from 'react'
import {FILTER_ALL, QuoteItem} from '../../utils/constants'
import {filterQuoteItems} from '../../utils/filter'
import {getFuseSearchResult} from '../../utils/search'
import FilterSection from './FilterSection'
import ItemsList from './items-list'
import Searchbar from './searchbar'

interface Props {
	items: QuoteItem[]
}

export default function Quotes({items}: Props) {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedMainFilter, setSelectedMainFilter] = useState(FILTER_ALL)
	const [selectedTagFilter, setSelectedTagFilter] = useState(FILTER_ALL)
	const [favouriteQuoteIds, setFavouriteQuoteIds] = useState([])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const initialFavouriteIds = localStorage.getItem('favouriteQuoteIds')
				? JSON.parse(localStorage.getItem('favouriteQuoteIds'))
				: []

			setFavouriteQuoteIds(initialFavouriteIds)
		}
	}, [])

	const removeIdFromFavs = (id: number) =>
		favouriteQuoteIds.filter(favId => favId !== id)
	const addIdToFavs = (id: number) => [id, ...favouriteQuoteIds]

	const toggleFavourite = (id: number) => {
		let updatedItemsList
		if (favouriteQuoteIds.includes(id)) {
			updatedItemsList = removeIdFromFavs(id)
		} else {
			updatedItemsList = addIdToFavs(id)
		}

		localStorage.setItem('favouriteIds', JSON.stringify(updatedItemsList))
		setFavouriteQuoteIds(updatedItemsList)
	}

	const searchResults: QuoteItem[] = searchTerm
		? getFuseSearchResult(items, searchTerm, [
				'message',
				'sourceTitle',
				'contributorName',
		  ])
		: items

	const filteredItems = filterQuoteItems(
		searchResults,
		selectedMainFilter,
		selectedTagFilter,
		favouriteQuoteIds,
	)

	return (
		<div>
			<div className="text-center max-w-xl mx-auto py-2">
				<Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<FilterSection
					items={searchResults}
					selectedMainFilter={selectedMainFilter}
					setSelectedMainFilter={setSelectedMainFilter}
					selectedTagFilter={selectedTagFilter}
					setSelectedTagFilter={setSelectedTagFilter}
					favouriteIds={favouriteQuoteIds}
				/>
			</div>
			<ItemsList
				items={filteredItems}
				favouriteIds={favouriteQuoteIds}
				toggleFavourite={toggleFavourite}
			/>
		</div>
	)
}
