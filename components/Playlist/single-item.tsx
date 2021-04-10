import {PlaylistItem} from '../../utils/constants'

interface Props {
	item: PlaylistItem
}

export default function SingleItem({item}: Props) {
	return <div>{item.title}</div>
}
