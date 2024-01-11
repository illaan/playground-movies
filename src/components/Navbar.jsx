import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
	const [searchTerm, setSearchTerm] = useState();
	const navigate = useNavigate();

	const handleEnterKeyPress = async (e) => {
		if (e.key === "Enter") {
			navigate(`/results/${searchTerm}`);
			console.log("ovo je search results", searchResults);
		}
	};

	return (
		<div className="navbar">
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
			<Link to="/login">
				<div className="login-link">
					<h3>Log in</h3>
					&nbsp;
					<div className="login-icon">
						<FontAwesomeIcon
							style={{ color: "white", width: "2rem", height: "1.7rem" }}
							icon={faUser}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default NavBar;
