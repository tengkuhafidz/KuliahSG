import React from 'react'
import AnnouncementBar from './announcement-bar'
import BackToTop from './back-to-top'
import Footer from './footer'
import Hero from './hero'
import HtmlHead from './html-head'
import Navbar from './navbar'

export default function Layout({children}) {
	return (
		<div className="text-gray-900 dark:bg-gray-800 dark:text-gray-100">
			<HtmlHead />
			<AnnouncementBar />
			<div className="flex flex-col min-h-screen">
				<div
					className="bg-fixed bg-center"
					style={{backgroundImage: `url("/images/hero-bg.jpg")`}}
				>
					<div className="container mx-auto max-w-6xl pt-4 px-4">
						<Navbar />
						<Hero />
					</div>
				</div>
				<div className="container mx-auto max-w-6xl py-8 px-4">
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
			</div>
			<BackToTop />
		</div>
	)
}
