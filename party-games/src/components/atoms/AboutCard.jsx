import profile from "../../assets/about_us.svg";

export default function AboutCard() {
  return (
    <div className="bg-liteGray p-4 items-center rounded-lg lg:w-auto md:w-full ">
      <div className="flex  px-2">
        <h1 className="text-darkGreen text-2xl font-bold static"> About Us</h1>
        <img
          src={profile}
          className="h-64 w-80  p-4 top-0 right-0 flex-grow justify-end"
          alt="logo game page"
        />
      </div>
      <h1 className="text-darkGreen text-base font-bold p-3">
        {"  "}
        People relate to people. When you're selling a product or service, the
        best way to make people see how it can benefit them and be used in their
        own lives is to do just that: Show them how it benefits others and is
        used by others, just like them. It also helps build trust in a company
        and give faces to the name when you showcase your employees on your
        "About Us" page. Your customers will enjoy seeing that glimpse into your
        company, and it will remind them that there are real people behind the
        product. People relate to people. When you're selling a product or
        service, the best way to make people see how it can benefit them and be
        used in their own lives is to do just that: Show them how it benefits
        others and is used by others, just like them. It also helps build trust
        in a company and give faces to the name when you showcase your employees
        on your "About Us" page. Your customers will enjoy seeing that glimpse
        into your company, and it will remind them that there are real people
      </h1>
    </div>
  );
}
