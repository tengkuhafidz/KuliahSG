import axios from 'axios'
import {PlaylistItem, SHEET_KEY} from '../utils/constants'

export const fetchPlaylistItem = async (playlistId: string) => {
	return await axios.get(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${SHEET_KEY}`,
	)
}

export const addYoutubePlaylistItemDetails = (
	playlistItems: PlaylistItem[],
): Promise<PlaylistItem[]> => {
	return Promise.all(
		playlistItems.map(item => addYoutubePlaylistDetailsToSingleItem(item)),
	)
}

const addYoutubePlaylistDetailsToSingleItem = async (
	item: PlaylistItem,
): Promise<PlaylistItem> => {
	{
		const playlistId = extractPlaylistIdFromUrl(item.playlistUrl)
		const {data} = await fetchPlaylistItem(playlistId)
		const {
			thumbnails,
			videoOwnerChannelTitle,
			videoOwnerChannelId,
			publishedAt,
		} = data.items[0].snippet

		return {
			...item,
			playlistId,
			playlistThumbnailUrl: thumbnails.default.url,
			originChannelName: videoOwnerChannelTitle,
			originChannelUrl: constructChannelUrlById(videoOwnerChannelId),
			lastPublishedAt: publishedAt,
		}
	}
}

const extractPlaylistIdFromUrl = (playlistUrl: string) => {
	const url = new URL(playlistUrl)
	return url.searchParams.get('list')
}

const constructChannelUrlById = (channelId: string) => {
	return `https://www.youtube.com/channel/${channelId}`
}
