import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function TriviaPage() {
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
        if (!user) {
          return navigate("/");
        }
    
      }, [user, loading, error]);

    return (
        <div>
            <h3>Trivia Page</h3>
        </div>
    )
}
