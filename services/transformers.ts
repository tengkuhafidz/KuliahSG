import {
	defaultPageData,
	PlaylistItem,
	PageData,
	QuoteItem,
} from '../utils/constants'

const stringToBoolean = (field: string) => field === 'TRUE'
const stringToArray = (field: string) => field?.split(',')
const defaultToNull = (value: string) => (value ? value : null)

export const transformPlaylistItemsData = (
	itemValues: any[],
): PlaylistItem[] => {
	return itemValues.map((itemValue, index) => ({
		id: index,
		title: itemValue[0],
		playlistUrl: itemValue[1],
		language: itemValue[2],
		tags: stringToArray(itemValue[3]),
		isActive: stringToBoolean(itemValue[4]),
		playlistId: '',
		playlistThumbnailUrl: '',
		originChannelName: '',
		originChannelUrl: '',
		lastPublishedAt: '',
	}))
}

export const transformQuoteItemsData = (itemValues: any[]): QuoteItem[] => {
	return itemValues.map((itemValue, index) => ({
		id: index,
		message: itemValue[0],
		sourceTitle: itemValue[1],
		sourceUrl: itemValue[2],
		timestamp: itemValue[3],
		contributorName: itemValue[4],
		contributorUrl: itemValue[5],
		language: itemValue[6],
		tags: stringToArray(itemValue[7]),
		isActive: stringToBoolean(itemValue[8]),
	})).reverse()
}

export const transformPageData = (pageDataValue: any[]): PageData => ({
	// NAVBAR
	logoUrl: pageDataValue[1] || defaultPageData.logoUrl,
	navButtonText: defaultToNull(pageDataValue[2]),
	navButtonUrl: defaultToNull(pageDataValue[3]),
	// HERO
	heroTitle: defaultToNull(pageDataValue[5]),
	heroDescription: defaultToNull(pageDataValue[6]),
	primaryButtonText: defaultToNull(pageDataValue[7]),
	primaryButtonUrl: defaultToNull(pageDataValue[8]),
	secondaryButtonText: defaultToNull(pageDataValue[9]),
	secondaryButtonUrl: defaultToNull(pageDataValue[10]),
	//FOOTER
	footerText: defaultToNull(pageDataValue[12]),
	footerLinkableText: defaultToNull(pageDataValue[13]),
	footerLinkableUrl: defaultToNull(pageDataValue[14]),
	//SEO
	seoTitle: pageDataValue[16] || defaultPageData.seoTitle,
	seoDescription: pageDataValue[17] || defaultPageData.seoDescription,
	seoBannerUrl: pageDataValue[18] || defaultPageData.seoBannerUrl,
	//ANNOUNCEMENT BAR
	announcementMessage: defaultToNull(pageDataValue[20]),
	announcementDestinationUrl: defaultToNull(pageDataValue[21]),
})
