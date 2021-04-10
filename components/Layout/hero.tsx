import {useContext} from 'react'
import PageDataContext from '../../utils/PageDataContext'

export default function Hero() {
	const {heroTitle, heroDescription} = useContext(PageDataContext)
	return (
		<div className="py-12 mx-auto max-w-2xl text-center">
			<h1 className="text-3xl md:text-4xl font-bold text-white">{heroTitle}</h1>
			<p className="py-6 font-light text-md text-gray-300 dark:text-gray-400">
				{heroDescription}
			</p>
		</div>
	)
}
