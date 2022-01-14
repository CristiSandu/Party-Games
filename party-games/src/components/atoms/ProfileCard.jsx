import profile from "../../assets/profile.svg";
import { signOut } from "../../firebase";

export default function ProfileCard({ name, user, isInGame }) {
  return (
    <div className="bg-liteGray flex p-4 items-center rounded-lg lg:w-auto md:w-full">
      <img src={profile} className="h-44 w-44 p-4" alt="logo game page" />
      <div className="space-y-2 px-10">
        <h1 className="text-darkGreen text-2xl font-bold">Name: {name}</h1>
        {user?.isAnonymous === false && (
          <h1 className="text-darkGreen text-2xl font-bold">
            Email: {user?.email}
          </h1>
        )}

        {isInGame && (
          <div className="space-y-2">
            <h1 className="text-darkGreen text-2xl font-bold">
              UserType: Guest
            </h1>
            <h1 className="text-darkGreen text-2xl font-bold">Points: 1234</h1>
          </div>
        )}

        <div className="flex space-x-4 items-stretch">
          <button
            className="bg-greenBlue flex-none text-darkGreen font-bold rounded-lg p-2"
            onClick={signOut}
          >
            Logout
          </button>

          {isInGame && (
            <h1 className="flex-auto font-bold text-4xl text-darkGreen  text-center">
              Place 1
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
