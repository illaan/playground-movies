const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzg1MmNhOWYyMjRjZTg1MjMzMTZmMTVmZjc5OTBmYSIsInN1YiI6IjY1ODE5YTNlZDUxOTFmMDhhNGFlMWVmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.af15k7rsNvjrY-iRysht1__UXIzOkf6yQLX8STH5ifU",
	},
};
export async function fetchMovies(url) {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data.results);

	return data.results;
}

export async function detailMovie(id) {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?`,
		options
	);
	const data = await response.json();
	console.log(data);

	return data;
}

export async function searchMovies(title) {
	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${title}`,
		options
	);
	const data = await response.json();
	console.log("ovo je search", data.results);

	return data.results;
}
