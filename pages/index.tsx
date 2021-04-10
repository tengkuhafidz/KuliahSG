import {GetStaticProps} from 'next'
import React from 'react'
import ItemsList from '../components/Playlist/items-list'
import Layout from '../components/Layout'
import {getPlaylistItems, getPlaylistPageData} from '../services/sheet'
import {PageDataProvider} from '../utils/PageDataContext'

export default function Index({pageData, items}) {
	return (
		<PageDataProvider value={pageData}>
			<Layout>
				<ItemsList items={items} />
			</Layout>
		</PageDataProvider>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const items = await getPlaylistItems()
	const pageData = await getPlaylistPageData()

	return {
		props: {
			pageData,
			items,
		},
	}
}