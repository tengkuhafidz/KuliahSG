import {PlaylistItem} from '../../../utils/constants'

interface Props {
	item: PlaylistItem
	favouriteIds: number[]
	toggleFavourite: (id: number) => void
}

export default function Card({item, favouriteIds, toggleFavourite}: Props) {
	const {
		id,
		title,
		originChannelName,
		originChannelUrl,
		playlistThumbnailUrl,
		language,
		playlistUrl,
	} = item
	const isFavourite = favouriteIds.includes(id)

	return (
		<div>
			<div className="shadow-lg rounded-xl hover:shadow-xl">
				<img
					src={playlistThumbnailUrl}
					alt="initiative poster"
					className="object-cover object-top w-full rounded-t-xl"
				/>
				<div className="py-4 px-3">
					<figcaption className="font-medium">
						<div className="text-gray-500 text-sm flex">
							<div className="flex-grow">
								<span className="text-green-600 tracking-wider">
									{language.toUpperCase()}
								</span>
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
						<div className="text-cyan-600 my-2">{title}</div>
						<p className="text-gray-500 font-light text-sm">
							<a
								href={originChannelUrl}
								target="_blank"
								className="hover:underline"
							>
								{originChannelName}
							</a>
						</p>
					</figcaption>
					<div className="py-4 mt-2">
						<a
							href={playlistUrl}
							target="_blank"
							className="bg-green-600 text-white py-3 px-4 rounded-full hover:bg-green-700"
						>
							Watch Playlist
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 inline-block ml-1 mb-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
