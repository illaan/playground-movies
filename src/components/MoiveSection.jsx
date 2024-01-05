import MovieCard from "./MovieCard";

function MovieSection({ movies, sectionType }) {
	return (
		<div className="movie-section">
			<h2>{sectionType}</h2>
			<div className="movie-list">
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
}

export default MovieSection;
