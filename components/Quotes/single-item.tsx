import {QuoteItem} from '../../utils/constants'

interface Props {
	item: QuoteItem
}

export default function SingleItem({item}: Props) {
	return <div>{item.message}</div>
}
