import logo from "./assets/game_room.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GamesPage from "./components/GamesPage"

function App() {
  return (
    <Router>
      <div classname="app">
        <Routes>
          <Route exact path='/' element = {< SignIn />} ></Route>
          <Route exact path='/signup' element = {< SignUp />} ></Route>
          <Route exact path='/gamesPage' element = {< GamesPage />} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
