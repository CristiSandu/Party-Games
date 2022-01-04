import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signIn, signInAnon} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./css/SignIn.css";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			return (
				<div>
				  <p>Initialising User...</p>
				</div>
			  );
		}
		if (error) {
			return (
			  <div>
				<p>Error: {error}</p>
			  </div>
			);
		}
		if (user) {
			navigate("/gamesPage");
		}
	}, [user, loading, error, navigate]);

	return (
		<div className="login">
			<div className="login__container">
				<input
					type="text"
					className="login__textBox"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className="login__textBox"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button
					className="login__btn"
					onClick={() => signIn(email, password)}
				>
					Login
				</button>
				<div>
					Don't have an account? <Link style={{ textDecoration: 'underline' }} to="/signup">Register</Link> now.
				</div>
				<button
					className="login__btn login__anon__btn"
					onClick={() => signInAnon()}
				>
					Sign in anonymously
				</button>
			</div>
		</div>
	);
}

export default SignIn;