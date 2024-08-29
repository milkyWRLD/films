import './App.css'
import MovieCard from './components/MovieCard'

function App() {
	return (
		<div className='App'>
			<MovieCard title='Snatch' rating={5} />
			<MovieCard title='Lock, Stock and Two Smoking Barrels' rating={4} />
			<MovieCard title='The Gentlemen' rating={3} />
			<MovieCard title='Sherlock Holmes' rating={2} />
			<MovieCard title='RocknRolla' rating={1} />
		</div>
	)
}

export default App
