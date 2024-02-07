import { useLoaderData, Link } from "react-router-dom";
import { detailMovie, addToFavorites } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function loader({ params }) {
	return detailMovie(params.id);
}

function MovieDetail() {
	const movie = useLoaderData();
	console.log(movie);
	const imageBaseURL = "https://image.tmdb.org/t/p/";
	const posterSize = "w500";
	const releaseYear = new Date(movie.release_date).getFullYear();
	const genreNames = movie.genres.map((genre) => genre.name);

	const backgroundStyle = {
		backgroundImage: `linear-gradient(rgba(50, 50, 50, 0.9), rgba(60, 60, 60, 0.9)), url(${imageBaseURL}${posterSize}${movie.poster_path})`,
		backgroundSize: "cover",
		height: "80vh",
		display: "flex",
		backgroundPosition: "center",
	};

	return (
		<>
			<Link to="..">
				<div className="back-button">
					<FontAwesomeIcon style={{ color: "aliceblue" }} icon={faArrowLeft} />
					&nbsp;
					<p>Back to home</p>
				</div>
			</Link>
			<div className="movie-detail-page" style={backgroundStyle}>
				<div className="movie-detail-container">
					<div className="movie-detail-image">
						<img
							src={`${imageBaseURL}${posterSize}${movie.poster_path}`}
							alt={movie.title}
						/>
					</div>
					<div className="movie-detail-options">
						<button onClick={addToFavorites}>Add to favorites</button>
						<button>Add to watchlist</button>
					</div>
				</div>

				<div className="movie-detail-info">
					<span>
						<h1>{movie.title}</h1>
						&nbsp;
						<p>({releaseYear})</p>
					</span>
					<p>{genreNames.join(", ")}</p>
					<p>
						<FontAwesomeIcon icon={faClock} />
						&nbsp;
						{movie.runtime}min.
					</p>
					<p style={{ fontSize: "1.3rem", fontStyle: "italic" }}>
						{movie.tagline}
					</p>
					<h3>Overview</h3>
					<p>{movie.overview}</p>
				</div>
			</div>
		</>
	);
}

export default MovieDetail;
