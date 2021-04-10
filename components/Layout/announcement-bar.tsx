import {useContext} from 'react'
import PageDataContext from '../../utils/PageDataContext'

export default function AnnouncementBar() {
	const {announcementMessage, announcementDestinationUrl} = useContext(
		PageDataContext,
	)

	if (!announcementMessage) {
		return null
	}

	return (
		<div className="w-full bg-black py-2  text-gray-200 text-sm font-light hover:text-xl ">
			<a href={announcementDestinationUrl} target="_blank">
				<div className="container mx-auto max-w-6xl text-center">
					{announcementMessage}
				</div>
			</a>
		</div>
	)
}
