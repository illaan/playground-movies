// import { requireAuth } from "../api";
import { redirect } from "react-router-dom";
import MovieSection from "../components/MoiveSection";

export function loader() {
	const isLoggedIn = localStorage.getItem("loggedin");

	if (!isLoggedIn) {
		throw redirect("/login");
	}
	return {};
}

function Profile() {
	// Static data for demonstration
	const userDetails = {
		name: "John Doe",
		email: "johndoe@example.com",
	};

	const favorites = [
		{ id: "tt0111161", title: "The Shawshank Redemption", year: "1994" },
		{ id: "tt0068646", title: "The Godfather", year: "1972" },
	];

	const watchlist = [
		{ id: "tt0468569", title: "The Dark Knight", year: "2008" },
		{ id: "tt0133093", title: "The Matrix", year: "1999" },
	];

	return (
		<div className="profile-container">
			<div className="user-details">
				<h1>{userDetails.name}'s Profile</h1>
				<p>Email: {userDetails.email}</p>
			</div>
			<div className="favorites">
				<MovieSection movies={favorites} sectionType="Favorites" />
			</div>
			<div className="watchlist">
				<MovieSection movies={watchlist} sectionType="Watchlist" />
			</div>
		</div>
	);
}

export default Profile;
