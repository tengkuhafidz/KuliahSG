import {useContext} from 'react'
import PageDataContext from '../../utils/PageDataContext'

export default function Navbar() {
	const {navButtonText, navButtonUrl, logoUrl} = useContext(PageDataContext)

	const renderNavButton = () => {
		if (!navButtonText || !navButtonUrl) {
			return null
		}

		return (
			<button
				className={`ml-4 md:ml-8 py-1 px-3 md:py-2 md:px-6 rounded-md text-white border border-white  hover:bg-green-600 hover:text-white hover:border-green-600`}
			>
				<a href={navButtonUrl} target="_blank">
					<span>{navButtonText}</span>
				</a>
			</button>
		)
	}

	return (
		<div className="flex mt-2">
			<div className="flex-grow">
				<div>
					<img src={logoUrl} alt="logo" height={40} className="inline-block" />
				</div>
			</div>
			<div>{renderNavButton()}</div>
		</div>
	)
}
