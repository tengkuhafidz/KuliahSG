import {FILTER_ALL, MainFilterOptions, PlaylistItem, QuoteItem} from './constants'

export const getDistinctTags = (items: PlaylistItem[] | QuoteItem[]) => {
	const distinctFields = []
	items.forEach(item => {
		if (item.tags) {
			item.tags.forEach(field => {
				field && !distinctFields.includes(field) && distinctFields.push(field)
			})
		}
	})

	return distinctFields.sort()
}

export const filterPlaylistItemsByMainFilterOptions = (items: PlaylistItem[], selectedMainFilter: string, favouriteIds: number[]) => {
	switch (selectedMainFilter) {
		case FILTER_ALL:
			return items
		case MainFilterOptions.FAVOURITE:
			return items.filter(item => favouriteIds.includes(item.id))
		default:
			return items.filter(item => item.language === selectedMainFilter)
	}
}

export const filterQuoteItemsByMainFilterOptions = (items: QuoteItem[], selectedMainFilter: string, favouriteIds: number[]) => {
	switch (selectedMainFilter) {
		case FILTER_ALL:
			return items
		case MainFilterOptions.FAVOURITE:
			return items.filter(item => favouriteIds.includes(item.id))
		default:
			return items.filter(item => item.language === selectedMainFilter)
	}
}

export const filterPlaylistItemsByTag = (items: PlaylistItem[], selectedTagsFilter: string) => {
	if (selectedTagsFilter === FILTER_ALL) {
		return items
	}

	return items.filter(item => item.tags.includes(selectedTagsFilter))
}

export const filterQuoteItemsByTag = (items: QuoteItem[], selectedTagsFilter: string) => {
	if (selectedTagsFilter === FILTER_ALL) {
		return items
	}

	return items.filter(item => item.tags.includes(selectedTagsFilter))
}

export const filterPlaylistItems = (
	items: PlaylistItem[],
	selectedTypeFilter: string,
	selectedTagsFilter: string,
	favouriteIds: number[]
) => {
	const filteredByMainFilterOptions = filterPlaylistItemsByMainFilterOptions(items, selectedTypeFilter, favouriteIds)
	return filterPlaylistItemsByTag(filteredByMainFilterOptions, selectedTagsFilter)
}

export const filterQuoteItems = (
	items: QuoteItem[],
	selectedTypeFilter: string,
	selectedTagsFilter: string,
	favouriteIds: number[]
) => {
	const filteredByMainFilterOptions = filterQuoteItemsByMainFilterOptions(items, selectedTypeFilter, favouriteIds)
	return filterQuoteItemsByTag(filteredByMainFilterOptions, selectedTagsFilter)
}
