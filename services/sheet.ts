import axios from 'axios'
import {SheetsDimension, SHEET_ID, SHEET_KEY} from '../utils/constants'
import {
	transformPageData,
	transformPlaylistItemsData,
	transformQuoteItemsData,
} from './transformers'

const fetchSheetsData = async (
	tabName: string,
	cellRange: string,
	majorDimension: SheetsDimension,
) => {
	return await axios.get(
		`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${tabName}!${cellRange}?majorDimension=${majorDimension}&key=${SHEET_KEY}`,
	)
}

export const getPlaylistItems = async () => {
	const {data} = await fetchSheetsData(
		'playlist-items',
		'A2:E',
		SheetsDimension.ROWS,
	)
	const allItems = transformPlaylistItemsData(data.values)
	return allItems.filter(item => item.isActive).reverse()
}

export const getPlaylistPageData = async () => {
	const {data} = await fetchSheetsData(
		'playlist-page',
		'B1:B22',
		SheetsDimension.COLUMNS,
	)
	return transformPageData(data.values[0])
}

export const getQuoteItems = async () => {
	const {data} = await fetchSheetsData(
		'quotes-items',
		'A2:I',
		SheetsDimension.ROWS,
	)
	const allItems = transformQuoteItemsData(data.values)
	return allItems.filter(item => item.isActive).reverse()
}

export const getQuotesPageData = async () => {
	const {data} = await fetchSheetsData(
		'quotes-page',
		'B1:B22',
		SheetsDimension.COLUMNS,
	)
	return transformPageData(data.values[0])
}
