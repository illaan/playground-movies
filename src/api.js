import { redirect } from "react-router-dom";

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

export async function loginUser(creds) {
	const res = await fetch("http://127.0.0.1:5000/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(creds),
	});
	const data = await res.json();

	if (!res.ok) {
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status,
		};
	}

	return data;
}

export async function addToFavorites(creds) {
	const res = fetch("http://localhost:5000/add_favorite", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(creds),
	});
	const data = await res.json();
	if (!res.ok) {
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status,
		};
	}
	return data;
}

// export async function requireAuth() {
// 	const isLoggedIn = localStorage.getItem("loggedin");

// 	if (!isLoggedIn) {
// 		throw redirect("/login");
// 	}
// 	return redirect("/profile");
// }
