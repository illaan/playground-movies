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
import Profile from "./pages/Profile";
import { loader as homeLoader } from "./pages/Home";
import { loader as detailLoader } from "./components/MovieDetail";
import { loader as searchLoader } from "./pages/Search";
import { loader as profileLoader } from "./pages/Profile";
import { action as loginAction } from "./pages/Login";

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
			<Route path="login" element={<LogIn />} action={loginAction} />
			<Route path="profile" element={<Profile />} loader={profileLoader} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
