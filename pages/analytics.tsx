import {HOCKEYSTACK_KEY} from '../utils/constants'

export default () => null

export const getServerSideProps = async context => {
	return {
		redirect: {
			destination: `https://www.hockeystack.com/sharing/${HOCKEYSTACK_KEY}/dashboard`,
			permanent: false,
		},
	}
}
