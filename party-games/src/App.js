import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GamesPage from "./components/pages/GamesPage";
import RoomsPage from "./components/pages/RoomsPage";
import TriviaPage from "./components/pages/TriviaPage";
import CreateRoomForm from "./components/atoms/CreateRoomForm";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/gamesPage" element={<GamesPage />}></Route>
          <Route exact path="/rooms" element={<RoomsPage />}></Route>
          <Route exact path="/trivia" element={<TriviaPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
