import { GetStaticProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import Playlist from '../components/Playlist'
import { getPlaylistItems, getPlaylistPageData } from '../services/sheet'
import { addYoutubePlaylistItemDetails } from '../services/youtube'
import { PageDataProvider } from '../utils/PageDataContext'

export default function Index({pageData, items}) {
	return (
		<PageDataProvider value={pageData}>
			<Layout>
				<Playlist items={items} />
			</Layout>
		</PageDataProvider>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const playlistItemsFromSheet = await getPlaylistItems()
	const playlistItemsWithYoutubeData = await addYoutubePlaylistItemDetails(playlistItemsFromSheet)
	
	const pageData = await getPlaylistPageData()

	return {
		props: {
			pageData,
			items: playlistItemsWithYoutubeData,
		},
	}
}
