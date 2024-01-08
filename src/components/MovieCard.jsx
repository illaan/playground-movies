import React from "react";
// import moviepic from './moviepic.jpg';
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
	const imageBaseURL = "https://image.tmdb.org/t/p/";
	const posterSize = "w500";
	const releaseYear = new Date(movie.release_date).getFullYear();

	return (
		<div className="movie">
			<Link to={`/details/${movie.id}`}>
				<div className="movie-image">
					<img
						src={`${imageBaseURL}${posterSize}${movie.poster_path}`}
						alt={movie.title}
					/>
				</div>

				<div className="movie-title">
					<h3>{movie.title}</h3>
				</div>
			</Link>
		</div>
	);
}

export default MovieCard;
