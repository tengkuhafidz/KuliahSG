import React, {useEffect, useState} from 'react'

const BackToTop = () => {
	const [visible, setVisible] = useState(false)

	const listener: EventListener = () => {
		if (window.pageYOffset > 0) {
			setVisible(true)
		} else {
			setVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', listener)
		return (): void => {
			window.removeEventListener('scroll', listener)
		}
	})

	const scrollToTop = (): void => {
		window.scrollTo(0, 0)
	}
	return (
		<div
			onClick={scrollToTop}
			className={`transition-opacity fixed bottom-0 right-0 z-50 p-4 md:py-8 xl:px-24 duration-500 ${
				visible ? 'opacity-50 hover:opacity-100 cursor-pointer' : 'opacity-0'
			}`}
		>
			<button
				aria-label="Back to top"
				className="rounded-lg bg-gray-500 hover:bg-gray-700 p-1 md:p-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 10l7-7m0 0l7 7m-7-7v18"
					/>
				</svg>
			</button>
		</div>
	)
}

export default BackToTop
