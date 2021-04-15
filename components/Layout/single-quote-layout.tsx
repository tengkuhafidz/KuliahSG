import React from 'react'
import AnnouncementBar from './announcement-bar'
import BackToTop from './back-to-top'
import Footer from './footer'
import HtmlHead from './html-head'
import Navbar from './navbar'

export default function SingleQuoteLayout({children}) {
	return (
		<div className="text-gray-900 bg-gray-100">
			<HtmlHead />
			<div
				className="bg-fixed bg-center min-h-screen flex flex-col"
				style={{backgroundImage: `url("/images/hero-bg.jpg")`}}
			>
				<AnnouncementBar />
				<div className="container mx-auto max-w-6xl pt-4 px-4">
					<Navbar />
				</div>
				<div className="container mx-auto max-w-6xl flex-grow px-4 flex flex-col justify-center">
					<main className="py-16">{children}</main>
				</div>
				<Footer />
			</div>
			<BackToTop />
		</div>
	)
}
