import {GetStaticProps} from 'next'
import React from 'react'
import ItemsList from '../components/Quotes/items-list'
import Layout from '../components/Layout'
import {getQuoteItems, getQuotesPageData} from '../services/sheet'
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
	const items = await getQuoteItems()
	const pageData = await getQuotesPageData()

	return {
		props: {
			pageData,
			items,
		},
	}
}
