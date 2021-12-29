import logo from "./assets/game_room.svg";

import "./App.css";
import ProfileCard from "./components/atoms/ProfileCard";

function App() {
  return (
    <div className="p-10">
      <ProfileCard className="w-28" name="user" profile_type="guest" />
    </div>
  );
}

export default App;
