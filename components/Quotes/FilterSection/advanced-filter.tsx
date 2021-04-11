import {Dispatch, SetStateAction, useState} from 'react'
import {FILTER_ALL, QuoteItem} from '../../../utils/constants'
import {getDistinctTags} from '../../../utils/filter'
import FilterOptions from './filter-options'

interface Props {
	items: QuoteItem[]
	selectedTagFilter: string
	setSelectedTagFilter: Dispatch<SetStateAction<string>>
}

export default function AdvancedFilter({
	items,
	selectedTagFilter,
	setSelectedTagFilter,
}: Props) {
	const [showFilterOptions, setShowFilterOptions] = useState(false)

	const distinctFields = getDistinctTags(items)

	const clearFilter = () => {
		setSelectedTagFilter(FILTER_ALL)
		setShowFilterOptions(false)
	}

	if (!showFilterOptions) {
		return (
			<p
				className="text-gray-500 text-sm underline cursor-pointer"
				onClick={() => setShowFilterOptions(true)}
			>
				Advanced Filter
			</p>
		)
	}

	return (
		<div>
			<p
				className="text-gray-500 text-sm underline cursor-pointer"
				onClick={clearFilter}
			>
				[Clear]
			</p>
			<FilterOptions
				options={distinctFields}
				selectedFilter={selectedTagFilter}
				setSelectedFilter={setSelectedTagFilter}
			/>
		</div>
	)
}
