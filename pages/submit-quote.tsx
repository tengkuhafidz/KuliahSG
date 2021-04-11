export default () => null

export const getServerSideProps = async context => {
	return {
		redirect: {
			destination: `https://docs.google.com/forms/d/e/1FAIpQLScAYiCsNnAeuicqzPYFw_YSxjwxbtvTl_ace4FaMWG5AL7OYw/viewform`,
			permanent: false,
		},
	}
}
