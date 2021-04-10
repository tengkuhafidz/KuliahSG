import axios from "axios"
import { SHEET_KEY } from "../utils/constants"

export const fetchPlaylistItem = async (
	playlistId: string,
) => {
	return await axios.get(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${SHEET_KEY}`,
	)
}

