import profile from "../../assets/profile.svg";

export default function ProfileCard({ name, profile_type }) {
  return (
    <div className="bg-liteGray flex p-4 items-center rounded-lg lg:w-auto md:w-full">
      <img src={profile} className="h-44 w-44 p-4" alt="logo game page" />
      <div className="space-y-4 px-10">
        <h1 className="text-darkGreen text-2xl font-bold">UserName: {name}</h1>
        <h1 className="text-darkGreen text-2xl font-bold">
          UserType: {profile_type}
        </h1>
      </div>
    </div>
  );
}
