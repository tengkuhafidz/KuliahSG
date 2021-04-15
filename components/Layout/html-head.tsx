import Head from 'next/head'
import {useContext} from 'react'
import {HOCKEYSTACK_KEY} from '../../utils/constants'
import PageDataContext from '../../utils/PageDataContext'

export default function HtmlHead() {
	const {seoTitle, seoDescription, seoBannerUrl} = useContext(PageDataContext)
	const fullSeoTitle = `${seoTitle} | Powered by Websheets`
	return (
		<Head>
			<link rel="icon" href="/favicon.ico" />
			{/* HTML Meta Tags */}
			<title>{fullSeoTitle}</title>
			<meta name="description" content={seoDescription} />

			{/* Facebook Meta Tags */}
			<meta
				property="og:url"
				content="https://kuliah.sg/"
			/>
			<meta property="og:type" content="website" />
			<meta property="og:title" content={fullSeoTitle} />
			<meta property="og:description" content={seoDescription} />
			<meta property="og:image" content={seoBannerUrl} />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:domain"
				content="kuliah.sg"
			/>
			<meta
				property="twitter:url"
				content="https://kuliah.sg/"
			/>
			<meta name="twitter:title" content={fullSeoTitle} />
			<meta name="twitter:description" content={seoDescription} />
			<meta name="twitter:image" content={seoBannerUrl} />
			{/* Scripts */}
			<script
				async
				data-apikey={HOCKEYSTACK_KEY}
				data-cookieless
				src="https://cdn.jsdelivr.net/npm/hockeystack@latest/hockeystack.min.js"
			></script>
		</Head>
	)
}
