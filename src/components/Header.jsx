import "../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<h1>MovieLand</h1>
			{/* <nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</nav> */}
		</header>
	);
}

export default Header;
