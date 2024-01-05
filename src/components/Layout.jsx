import { Outlet } from "react-router-dom";
import "../styles/Layout.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
	return (
		<div className="layout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
