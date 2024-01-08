import { useLoaderData } from "react-router-dom";
import { detailMovie } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

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
		height: "80vh", // Adjust the height as needed
		display: "flex",
		backgroundPosition: "center",
	};

	return (
		<div className="detail-container">
			<div className="movie-detail-page" style={backgroundStyle}>
				<div className="movie-detail-image">
					<img
						src={`${imageBaseURL}${posterSize}${movie.poster_path}`}
						alt={movie.title}
					/>
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
			<div style={{ display: "flex" }}>{}</div>
		</div>
	);
}

export default MovieDetail;
