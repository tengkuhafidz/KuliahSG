import Link from 'next/link'
import {QuoteItem} from '../../../utils/constants'

interface Props {
	item: QuoteItem
	favouriteIds: number[]
	toggleFavourite: (id: number) => void
}

export default function Card({item, favouriteIds, toggleFavourite}: Props) {
	const {
		id,
		message,
		sourceTitle,
		sourceUrl,
		contributorName,
		contributorUrl,
		timestamp,
	} = item
	const isFavourite =
		favouriteIds && favouriteIds.length > 0 ? favouriteIds.includes(id) : false

	return (
		<div>
			<Link href={`/quotes/${item.id}`}>
				<a>
					<div className="shadow-lg rounded-xl hover:shadow-xl max-w-xl mx-auto bg-white flex flex-col p-8">
						<div className="flex">
							<div className="flex-grow">
								<p className="text-xs text-gray-500 font-light mt-1">
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
						<p className="font-semibold text-lg md:text-xl pt-6 pb-4">
							"{message}"
						</p>
						<p className="text-sm text-gray-500 font-light">
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
				</a>
			</Link>
		</div>
	)
}
