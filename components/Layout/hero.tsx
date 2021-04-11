import {useContext} from 'react'
import PageDataContext from '../../utils/PageDataContext'
import Link from 'next/link'

export default function Hero() {
	const {
		heroTitle,
		heroDescription,
		primaryButtonText,
		primaryButtonUrl,
		secondaryButtonText,
		secondaryButtonUrl,
	} = useContext(PageDataContext)

	let firstButtonStyle =
		'py-2 px-8 bg-green-500 text-white rounded-lg border border-green-500 hover:bg-green-700 hover:border-green-700 mr-4'
	let secondButtonStyle =
		'py-2 px-8 text-green-500 rounded-lg border border-green-500 hover:bg-green-700 hover:border-green-700 hover:text-white mr-4'
	if (primaryButtonUrl === '/') {
		firstButtonStyle =
			'py-2 px-8 text-green-500 rounded-lg border border-green-500 hover:bg-green-700 hover:border-green-700 hover:text-white mr-4'
		secondButtonStyle =
			'py-2 px-8 bg-green-500 text-white rounded-lg border border-green-500 hover:bg-green-700 hover:border-green-700 mr-4'
	}

	return (
		<div className="py-12 mx-auto max-w-2xl text-center">
			<h1 className="text-3xl md:text-4xl font-bold text-white">{heroTitle}</h1>
			<p className="py-6 font-light text-md text-gray-300 dark:text-gray-400">
				{heroDescription}
			</p>
			<div className="mt-4">
				<Link href={primaryButtonUrl}>
					<button className={firstButtonStyle}>{primaryButtonText}</button>
				</Link>
				<Link href={secondaryButtonUrl}>
					<button className={secondButtonStyle}>{secondaryButtonText}</button>
				</Link>
			</div>
		</div>
	)
}
