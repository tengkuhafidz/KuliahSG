import {Dispatch, SetStateAction} from 'react'
import {PlaylistItem} from '../../../utils/constants'
import {filterPlaylistItemsByMainFilterOptions} from '../../../utils/filter'
import AdvancedFilter from './advanced-filter'
import MainFilter from './main-filter'

interface Props {
	items: PlaylistItem[]
	selectedMainFilter: string
	setSelectedMainFilter: Dispatch<SetStateAction<string>>
	selectedTagFilter: string
	setSelectedTagFilter: Dispatch<SetStateAction<string>>
	favouriteIds: number[]
}

export default function FilterSection({
	items,
	selectedMainFilter,
	setSelectedMainFilter,
	selectedTagFilter,
	setSelectedTagFilter,
	favouriteIds,
}: Props) {
	const itemsByMainFilter = filterPlaylistItemsByMainFilterOptions(
		items,
		selectedMainFilter,
		favouriteIds,
	)

	return (
		<div>
			<MainFilter
				selectedMainFilter={selectedMainFilter}
				setSelectedMainFilter={setSelectedMainFilter}
				setSelectedTagFilter={setSelectedTagFilter}
			/>
			<AdvancedFilter
				items={itemsByMainFilter}
				selectedTagFilter={selectedTagFilter}
				setSelectedTagFilter={setSelectedTagFilter}
			/>
		</div>
	)
}
