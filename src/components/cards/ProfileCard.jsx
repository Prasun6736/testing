import { ProfileCircle, MagicStar } from "iconsax-react";

export default function ProfileCard() {
  return (
    <div className="w-full h-[35vh] rounded-xl border-2 border-slate-500 flex justify-between items-center gap-5 bg-gradient-to-br  from-brand-blue to-blue-900">
      <div className="w-[40%] h-full p-3 flex gap-2  overflow-hidden">
        {/* <img src="" className="" alt="" /> */}
        <div className="w-1/2 flex justify-center items-center ">
          <ProfileCircle variant="Bulk" className="text-white" size="200" />
        </div>
        <div className="w-1/2 flex flex-col text-2xl  justify-evenly text-white  ">
          <div className="">
            <h1 className="font-base ">Hello</h1>
            <h1 className="font-black">Mr. Abhisek Maiti</h1>
          </div>
          <div className="text-white/60">
            <h1 className="text-base font-semibold ">About</h1>
            <h1 className="text-lg whitespace-nowrap ">
              A common text wont hold myself
            </h1>
          </div>
        </div>
      </div>

      {/* tOP SKILLS  */}
      <div className="w-[50%] h-full p-4 flex flex-col gap-5">
        <div className="w-full h-full flex flex-col justify-center gap-5">
          <div className="w-fit flex gap-5 text-xl font-black text-white ">
            <MagicStar variant="Bulk" size="30" />
            <h1>Your Top Skills</h1>
          </div>
          <div className="w-full overflow-x-scroll overflow-y-hidden flex gap-5">
            <h1 className="w-fit px-3 py-2 text-sm font-black bg-brand-green shadow-xl shadow-black border border0white rounded-lg whitespace-nowrap">
              Skill One
            </h1>
            <h1 className="w-fit px-3 py-2 text-sm font-black bg-brand-green shadow-xl shadow-black border border0white rounded-lg whitespace-nowrap">
              Skill Two
            </h1>
            <h1 className="w-fit px-3 py-2 text-sm font-black bg-brand-green shadow-xl shadow-black border border0white rounded-lg whitespace-nowrap">
              Skill Threee
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
