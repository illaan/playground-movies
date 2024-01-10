import { useState } from "react";
import { fetchMovies } from "../api";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MovieSection from "../components/MoiveSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export async function loader() {
	const topRatedURL = "https://api.themoviedb.org/3/movie/top_rated?";
	const popularURL = "https://api.themoviedb.org/3/movie/popular?";
	const upcomingURL =
		"https://api.themoviedb.org/3/movie/upcoming?api_key=73852ca9f224ce8523316f15ff7990fa";

	const topRatedMovies = await fetchMovies(topRatedURL);
	const mostPopularMovies = await fetchMovies(popularURL);
	const upcomingMovies = await fetchMovies(upcomingURL);

	return {
		topRatedMovies,
		mostPopularMovies,
		upcomingMovies,
	};
}

function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	// const [searchResults, setSearchResults] = useState([]);
	const navigate = useNavigate();

	const { topRatedMovies, mostPopularMovies, upcomingMovies } = useLoaderData();

	const handleEnterKeyPress = async (e) => {
		if (e.key === "Enter") {
			navigate(`/results/${searchTerm}`);
			console.log("ovo je search results", searchResults);
		}
	};

	return (
		<div className="home">
			<div className="search">
				<input
					type="text"
					placeholder="Search for movies..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyUp={handleEnterKeyPress}
				/>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>

			<div>
				<MovieSection movies={topRatedMovies} sectionType="Top rated" />
			</div>

			<div>
				<MovieSection movies={mostPopularMovies} sectionType="Most popular" />
			</div>

			<div>
				<MovieSection movies={upcomingMovies} sectionType="Upcoming" />
			</div>
		</div>
	);
}

export default Home;
