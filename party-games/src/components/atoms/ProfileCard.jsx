import profile from "../../assets/profile.svg";

export default function ProfileCard({ name, profile_type }) {
  return (
    <div className="bg-liteGray flex p-4 items-center rounded-lg w-1/4">
      <img src={profile} className="h-44 w-44 p-4" alt="logo game page" />
      <div className="relative space-y-4 px-10">
        <h1 className="text-2xl">UserName: {name}</h1>
        <h1 className="text-2xl">UserType: {profile_type}</h1>
      </div>
    </div>
  );
}
