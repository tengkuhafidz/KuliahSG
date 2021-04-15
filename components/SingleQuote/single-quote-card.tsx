import {useEffect, useState} from 'react'
import {QuoteItem} from '../../utils/constants'

interface Props {
	item: QuoteItem
}

export default function SingleQuoteCard({item}: Props) {
	const {
		id,
		message,
		sourceTitle,
		sourceUrl,
		contributorName,
		contributorUrl,
		timestamp,
	} = item

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

	const isFavourite =
		favouriteQuoteIds.length > 0 ? favouriteQuoteIds.includes(id) : false

	return (
		<div className="py-4 md:py-8">
			<div className="rounded-xl bg-white py-8 px-8 lg:px-12 shadow-lg hover:shadow-xl">
				<div className="flex">
					<div className="flex-grow">
						<p className="text-xs md:text-sm text-gray-500 font-light mt-1">
							Contributed by{' '}
							<a
								href={contributorUrl}
								target="_blank"
								className="hover:underline hover:text-green-600"
							>
								{contributorName}
							</a>
						</p>
					</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 cursor-pointer text-green-600 transform hover:scale-125"
							viewBox="0 0 20 20"
							fill={isFavourite ? 'currentColor' : 'none'}
							stroke="currentColor"
							onClick={() => toggleFavourite(id)}
						>
							<path
								fillRule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<p className="font-semibold text-lg lg:text-2xl py-8">"{message}"</p>
				<p className="text-sm lg:text-lg text-gray-500 font-light">
					-{' '}
					<a
						href={sourceUrl}
						target="_blank"
						className="hover:underline hover:text-green-600"
					>
						{sourceTitle} ({timestamp})
					</a>
				</p>
			</div>
		</div>
	)
}
