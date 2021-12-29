import logo from "./assets/game_room.svg";

import "./App.css";
import ProfileCard from "./components/atoms/ProfileCard";
import AboutCard from "./components/atoms/AboutCard";

import ListOfGamesCard from "./components/atoms/ListOfGamesCard";

function App() {
  const games = ["Trivia", "In Progress..", "In Progress.."];

  return (
    <div className="p-5 flex bg-darkGreen space-x-10 h-screen">
      <div className="space-y-7 w-1/3">
        <ProfileCard className="w-28 h-1/5" name="user" profile_type="guest" />
        <AboutCard className="w-28 h-4/5" />
      </div>
      <div className="space-y-7 w-2/3">
        <ListOfGamesCard games={games} />
      </div>
    </div>
  );
}

export default App;
