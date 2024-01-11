import { Link } from "react-router-dom";
import NavBar from "./Navbar";

function Header() {
	return (
		<header className="header">
			<Link to="/">
				<h1>MovieLand</h1>
			</Link>

			<NavBar />

			{/* <nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</nav> */}
		</header>
	);
}

export default Header;
