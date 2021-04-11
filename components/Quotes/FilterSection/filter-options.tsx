import {FILTER_ALL} from '../../../utils/constants'

interface Props {
	options: string[]
	selectedFilter: string
	setSelectedFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function FilterOptions({
	options,
	selectedFilter,
	setSelectedFilter,
}: Props) {
	const renderOptions = () => {
		const allOptions = [FILTER_ALL, ...options]
		return allOptions.map(option => (
			<span
				onClick={() => setSelectedFilter(option)}
				className={`py-1 px-3 inline-block text-sm m-1 cursor-pointer rounded-lg ${
					option === selectedFilter
						? 'bg-green-600 hover:bg-green-700 text-gray-200'
						: 'bg-gray-200 hover:bg-gray-300 text-gray-700'
				}`}
			>
				{option}
			</span>
		))
	}

	return <div className="py-1">{renderOptions()}</div>
}
