export interface PlaylistItem {
	id: number
	title: string
	playlistUrl: string
	language: string
	tags: string[]
	isActive: boolean
	playlistId: string
	playlistThumbnail: string
}

export interface QuoteItem {
	id: number
	message: string
	sourceTitle: string
	sourceUrl: string
	contributorName: string
	contributorUrl: string
	language: string
	tags: string[]
	isActive: boolean
}

export interface PageData {
	// NAVBAR
	logoUrl: string
	navButtonText: string
	navButtonUrl: string
	// HERO
	heroTitle: string
	heroDescription: string
	primaryButtonText: string
	primaryButtonUrl: string
	secondaryButtonText: string
	secondaryButtonUrl: string
	//FOOTER
	footerText: string
	footerLinkableText: string
	footerLinkableUrl: string
	//SEO
	seoTitle: string
	seoDescription: string
	seoBannerUrl: string
	//ANNOUNCEMENT BAR
	announcementMessage: string
	announcementDestinationUrl: string
}

export const defaultPageData: PageData = {
	// NAVBAR
	logoUrl: '/images/logo.png',
	navButtonText: '',
	navButtonUrl: '',
	// HERO
	heroTitle: 'Watch local Islamic content from the comfort of your home',
	heroDescription:
		'Our local asatizah have been hard at work in producing online content to ensure that we can continue to seek religious knowledge in this uncertain time. We curate them here to support their efforts.',
	primaryButtonText: 'Treat The Dev',
	primaryButtonUrl: 'https://buymeacoffee.com/sohafidz',
	secondaryButtonText: 'Documentation',
	secondaryButtonUrl: 'https://docs.websheets.co',
	//FOOTER
	footerText: 'This project was developed by',
	footerLinkableText: 'Tengku Hafidz',
	footerLinkableUrl: 'https://tengkuhafidz.com',
	//SEO
	seoTitle: 'Websheets',
	seoDescription: 'Build websites with just Google Sheets',
	seoBannerUrl: '/images/banner.png',
	//ANNOUNCEMENT BAR
	announcementMessage:
		'Click here for Terawih prayers booking guide in Singapore 🇸🇬',
	announcementDestinationUrl:
		'https://www.facebook.com/MUIS.SG/posts/10158740795711329',
}

export enum SheetsDimension {
	ROWS = 'ROWS',
	COLUMNS = 'COLUMNS',
}

export const SHEET_ID = process.env.SHEET_ID
export const SHEET_KEY = process.env.SHEET_KEY
export const HOCKEYSTACK_KEY = process.env.HOCKEYSTACK_KEY
