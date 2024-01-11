import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MovieDetail from "./components/MovieDetail";
import Search from "./pages/Search";
import LogIn from "./pages/Login";
import { loader as homeLoader } from "./pages/Home";
import { loader as detailLoader } from "./components/MovieDetail";
import { loader as searchLoader } from "./pages/Search";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index loader={homeLoader} element={<Home />} />
			<Route
				path="details/:id"
				element={<MovieDetail />}
				loader={detailLoader}
			/>
			<Route
				path="results/:search"
				element={<Search />}
				loader={searchLoader}
			/>
			<Route path="login" element={<LogIn />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
