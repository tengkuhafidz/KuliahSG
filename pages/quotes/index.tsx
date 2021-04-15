import { GetStaticProps } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
import Quotes from '../../components/Quotes'
import { getQuoteItems, getQuotesPageData } from '../../services/sheet'
import { PageDataProvider } from '../../utils/PageDataContext'

export default function QuotesPage({pageData, items}) {
	return (
		<PageDataProvider value={pageData}>
			<Layout>
				<Quotes items={items} />
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
