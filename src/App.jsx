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
import { loader as homeLoader } from "./pages/Home";
import { loader as detailLoader } from "./components/MovieDetail";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index loader={homeLoader} element={<Home />} />
			<Route
				path="details/:id"
				element={<MovieDetail />}
				loader={detailLoader}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
