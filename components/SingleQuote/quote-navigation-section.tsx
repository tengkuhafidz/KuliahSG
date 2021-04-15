import Link from 'next/link'
import React from 'react'

interface Props {
	currItemIndex: number
	totalItems: number
}

export default function QuoteNavigationSection({
	currItemIndex,
	totalItems,
}: Props) {
	const firstItemIndex = 0
	const lastItemIndex = totalItems - 1

	const isFirstItem = currItemIndex === firstItemIndex
	const isLastItem = currItemIndex === lastItemIndex

	const previousIndex = isFirstItem ? lastItemIndex : currItemIndex - 1
	const nextIndex = isLastItem ? firstItemIndex : currItemIndex + 1
	const randomIndex = Math.floor(Math.random() * lastItemIndex)

	return (
		<div className="flex">
			<Link href={`/quotes/${previousIndex}`}>
				<a className="border-2 bg-border-white text-white p-3 rounded-xl hover:bg-white hover:text-gray-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M7 16l-4-4m0 0l4-4m-4 4h18"
						/>
					</svg>
				</a>
			</Link>
			<Link href={`/quotes/${randomIndex}`}>
				<a className="border-2 bg-border-white text-white p-3 rounded-xl flex-grow mx-4 text-center hover:bg-white hover:text-gray-800">
					Random Quote
				</a>
			</Link>
			<Link href={`/quotes/${nextIndex}`}>
				<a className="border-2 bg-border-white text-white p-3 rounded-xl hover:bg-white hover:text-gray-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</a>
			</Link>
		</div>
	)
}
