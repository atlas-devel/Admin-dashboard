import profile from "../../../../assets/images/profile.jpeg";

function Profile() {
  return (
    <div className="flex gap-2 sm:gap-4 items-start mr-auto ">
      <div className="shrink-0 shadow-md border-primary-muted border rounded-full h-8 w-8 md:h-13 md:w-13 overflow-hidden ">
        <img loading="lazy" src={profile} className="" alt="w-full h-full" />
      </div>
      <div className="hidden capitalize sm:flex flex-col gap-1">
        {/* name */}
        <h1>irakarama leon</h1>
        {/* role */}
        <p className="text-sm text-neutral-500">admin</p>
      </div>
    </div>
  );
}

export default Profile;
