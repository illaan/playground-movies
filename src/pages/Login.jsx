import { Form, Link } from "react-router-dom";
import { loginUser } from "../api";
import { useActionData, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");

	try {
		const data = await loginUser({ email, password });
		localStorage.setItem("loggedin", true);
		console.log(data);
		return redirect("/profile");
	} catch (err) {
		return err.message;
	}
}

function LogIn() {
	const errorMessage = useActionData();

	return (
		<>
			<Link to="..">
				<div className="back-button">
					<FontAwesomeIcon style={{ color: "aliceblue" }} icon={faArrowLeft} />
					&nbsp;
					<p>Back to home</p>
				</div>
			</Link>
			<div className="login-container">
				{errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}
				<h1>Sign in to your account</h1>
				<Form method="post" className="login-form">
					<label htmlFor="firstname">First name:</label>
					<input
						name="firstname"
						type="text"
						placeholder="Enter your first name"
					/>

					<label htmlFor="lastname">Last name:</label>
					<input
						name="lastname"
						type="text"
						placeholder="Enter your last name"
					/>

					<label htmlFor="username">Username:</label>
					<input
						name="username"
						type="text"
						placeholder="Enter your username"
					/>

					<label htmlFor="email">Email address:</label>
					<input
						name="email"
						type="email"
						placeholder="Enter your email address"
					/>

					<label htmlFor="password">Password:</label>
					<input
						name="password"
						type="password"
						placeholder="Enter your password"
					/>

					<button type="submit">Sign in</button>
				</Form>
			</div>
		</>
	);
}

export default LogIn;
