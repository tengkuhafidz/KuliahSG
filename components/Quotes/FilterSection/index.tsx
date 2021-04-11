import {Dispatch, SetStateAction} from 'react'
import {QuoteItem} from '../../../utils/constants'
import {filterQuoteItemsByMainFilterOptions} from '../../../utils/filter'
import AdvancedFilter from './advanced-filter'
import MainFilter from './main-filter'

interface Props {
	items: QuoteItem[]
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
	const itemsByMainFilterOptions = filterQuoteItemsByMainFilterOptions(
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
				items={itemsByMainFilterOptions}
				selectedTagFilter={selectedTagFilter}
				setSelectedTagFilter={setSelectedTagFilter}
			/>
		</div>
	)
}
