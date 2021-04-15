import React from 'react'
import {QuoteItem} from '../../utils/constants'
import QuoteNavigationSection from './quote-navigation-section'
import SingleQuoteCard from './single-quote-card'
import Link from 'next/link'

interface Props {
	item: QuoteItem
	totalItems: number
}

export default function SingleQuote({item, totalItems}: Props) {
	return (
		<div className="max-w-xl lg:max-w-2xl mx-auto">
			<div className="mb-8">
				<Link href="/quotes">
					<a className="text-sm font-thin text-gray-400 hover:text-gray-100">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 inline-block"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="inline-block ml-2">back to quotes page</p>
					</a>
				</Link>
			</div>
			<SingleQuoteCard item={item} />
			<QuoteNavigationSection currItemIndex={item.id} totalItems={totalItems} />
		</div>
	)
}
