import { Link, useLoaderData } from "react-router-dom";
import { searchMovies } from "../api";
import MovieSection from "../components/MoiveSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function loader({ params }) {
	return searchMovies(params.search);
}

function Serach() {
	const results = useLoaderData();

	return (
		<>
			<Link to="..">
				<div className="back-button">
					<FontAwesomeIcon style={{ color: "aliceblue" }} icon={faArrowLeft} />
					&nbsp;
					<p>Back to home</p>
				</div>
			</Link>
			{results.length > 0 ? (
				<div>
					<MovieSection
						movies={results}
						sectionType="Results for your search: "
					/>
				</div>
			) : (
				<h2 style={{ margin: "auto", color: "white" }}>No results.</h2>
			)}
		</>
	);
}

export default Serach;
