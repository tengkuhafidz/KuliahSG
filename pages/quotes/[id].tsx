import { GetStaticProps } from 'next'
import React from 'react'
import SingleQuoteLayout from '../../components/Layout/single-quote-layout'
import SingleQuote from '../../components/SingleQuote'
import { getQuoteItems, getQuotesPageData } from '../../services/sheet'
import { PageData, QuoteItem } from '../../utils/constants'
import { PageDataProvider } from '../../utils/PageDataContext'

interface Props {
	pageData: PageData
	item: QuoteItem
	totalItems: number
}

export default function SingleQuotePage({pageData, item, totalItems}: Props) {
	return (
		<PageDataProvider value={pageData}>
			<SingleQuoteLayout>
				<SingleQuote item={item} totalItems={totalItems}/>
			</SingleQuoteLayout>
		</PageDataProvider>
	)
}

export async function getStaticPaths() {
	const quotes = await getQuoteItems()
	const paths = quotes.map(quote => ({params: {id: quote.id.toString()}}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	const pageData = await getQuotesPageData()
	const items = await getQuoteItems()
	const item = items.find(item => item.id.toString() === params.id[0])

	return {
		props: {
			pageData,
			item,
			totalItems: items.length
		},
	}
}
