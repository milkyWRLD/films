import PropTypes from 'prop-types'
import Star from './Star'

const Stars = ({ count }) => {
	if (typeof count !== 'number' || count < 1 || count > 5) {
		return null
	}

	const starsArray = Array.from({ length: count }, (_, i) => <Star key={i} />)

	return <ul className='card-body-stars u-clearfix'>{starsArray}</ul>
}

Stars.propTypes = {
	count: PropTypes.number.isRequired,
}

export default Stars
