import "../styles/Home.css";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { fetchMovies } from "../api";
import { useLoaderData } from "react-router-dom";
import MovieSection from "../components/MoiveSection";

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
	const { topRatedMovies, mostPopularMovies, upcomingMovies } = useLoaderData();

	return (
		<div className="home">
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
