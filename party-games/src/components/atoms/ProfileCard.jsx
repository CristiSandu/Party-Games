import profile from "../../assets/profile.svg";
import { signOut } from "../../firebase";

export default function ProfileCard({ name, user }) {
  return (
    <div className="bg-liteGray flex p-4 items-center rounded-lg lg:w-auto md:w-full">
      <img src={profile} className="h-44 w-44 p-4" alt="logo game page" />
      <div className="space-y-4 px-10">
        <h1 className="text-darkGreen text-2xl font-bold">Name: {name}</h1>
        {user?.isAnonymous === false && (
          <h1 className="text-darkGreen text-2xl font-bold">
            Email: {user?.email}
          </h1>
        )}
        <button
          className="bg-greenBlue text-darkGreen font-bold rounded-lg p-2"
          onClick={signOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
