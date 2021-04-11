import {useEffect, useState} from 'react'
import {FILTER_ALL, PlaylistItem} from '../../utils/constants'
import {filterPlaylistItems} from '../../utils/filter'
import {getFuseSearchResult} from '../../utils/search'
import FilterSection from './FilterSection'
import ItemsList from './items-list'
import Searchbar from './searchbar'

interface Props {
	items: PlaylistItem[]
}

export default function Playlist({items}: Props) {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedMainFilter, setSelectedMainFilter] = useState(FILTER_ALL)
	const [selectedTagFilter, setSelectedTagFilter] = useState(FILTER_ALL)
	const [favouriteIds, setFavouriteIds] = useState([])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const initialFavouriteIds = localStorage.getItem('favouriteIds')
				? JSON.parse(localStorage.getItem('favouriteIds'))
				: []
			setFavouriteIds(initialFavouriteIds)
		}
	}, [])

	const removeIdFromFavs = (id: number) =>
		favouriteIds.filter(favId => favId !== id)
	const addIdToFavs = (id: number) => [id, ...favouriteIds]

	const toggleFavourite = (id: number) => {
		let updatedItemsList
		if (favouriteIds.includes(id)) {
			updatedItemsList = removeIdFromFavs(id)
		} else {
			updatedItemsList = addIdToFavs(id)
		}

		localStorage.setItem('favouriteIds', JSON.stringify(updatedItemsList))
		setFavouriteIds(updatedItemsList)
	}

	const searchResults: PlaylistItem[] = searchTerm
		? getFuseSearchResult(items, searchTerm, ['title', 'originChannelName'])
		: items
	
	const filteredItems = filterPlaylistItems(
		searchResults,
		selectedMainFilter,
		selectedTagFilter,
		favouriteIds,
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
					favouriteIds={favouriteIds}
				/>
			</div>
			<ItemsList
				items={filteredItems}
				favouriteIds={favouriteIds}
				toggleFavourite={toggleFavourite}
			/>
		</div>
	)
}
