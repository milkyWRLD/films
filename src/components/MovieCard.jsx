import PropTypes from 'prop-types'
import Stars from './Stars'

const MovieCard = ({ title, rating }) => {
	return (
		<div className='movie-card'>
			<h2 className='movie-title'>{title}</h2>
			<Stars count={rating} />
		</div>
	)
}

MovieCard.propTypes = {
	title: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
}

export default MovieCard
