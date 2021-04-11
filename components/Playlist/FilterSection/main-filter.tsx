import {Dispatch, SetStateAction} from 'react'
import {FILTER_ALL, MainFilterOptions} from '../../../utils/constants'
import FilterOptions from './filter-options'

interface Props {
	selectedMainFilter: string
	setSelectedMainFilter: Dispatch<SetStateAction<string>>
	setSelectedTagFilter: Dispatch<SetStateAction<string>>
}

export default function MainFilter({
	selectedMainFilter,
	setSelectedMainFilter,
	setSelectedTagFilter,
}: Props) {
	const allTypes = [
		MainFilterOptions.FAVOURITE,
		MainFilterOptions.ENGLISH,
		MainFilterOptions.MALAY,
	]

	const selectedMainFilterAndResetSelectedTag = (mainFilterOption: string) => {
		setSelectedMainFilter(mainFilterOption)
		if (mainFilterOption !== FILTER_ALL) {
			setSelectedTagFilter(FILTER_ALL)
		}
	}

	return (
		<div className="py-2">
			<FilterOptions
				options={allTypes}
				selectedFilter={selectedMainFilter}
				setSelectedFilter={selectedMainFilterAndResetSelectedTag}
			/>
		</div>
	)
}
