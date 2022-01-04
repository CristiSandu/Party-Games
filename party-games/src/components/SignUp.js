import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, signUp, signInAnon } from "../firebase";
import "./css/SignUp.css";
import "./css/SignIn.css";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if (!name) {
            alert("Please enter name");
            return;
        }
        signUp(name, email, password);
    };

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
        <div className="register">
            <div className="register__container">
                <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <div>
                    Already have an account? <Link style={{ textDecoration: 'underline' }} to="/">Login</Link> now.
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
export default SignUp;