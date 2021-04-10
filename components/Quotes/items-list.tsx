import {QuoteItem} from '../../utils/constants'
import SingleItem from './single-item'

interface Props {
	items: QuoteItem[]
}

export default function ItemsList({items}: Props) {
	const renderItems = () => {
		return items.map(item => <SingleItem item={item} key={item.id} />)
	}

	return <div>{renderItems()}</div>
}
