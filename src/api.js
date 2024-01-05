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
