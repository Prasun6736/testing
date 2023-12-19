import {
  ArrowDown2,
  Happyemoji,
  LoginCurve,
  ProfileCircle,
} from "iconsax-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Profile() {
  const [click, setClick] = useState(false);

  return (
    <div className="relative flex  gap-3 items-center">
      <div className=" flex justify-center items-center">
        <div className="py-5 px-5 bg-white rounded-full border-2 border-brand-blue"></div>
        <Happyemoji className="absolute" />
      </div>
      <div className="">
        <h1 className="text-lg font-bold">User name</h1>
        <h1 className="text-xs font-semibold text-gray-400">Welcome</h1>
      </div>
      <ArrowDown2
        className={`ml-3 text-gray-600 hover:cursor-pointer duration-500 ease-in-out ${
          click ? "upto" : " "
        }`}
        size="20"
        variant="Bold"
        onClick={() => {
          setClick(!click);
        }}
      />
      {click ? (
        <div className="absolute top-12 right-0 rounded-xl bg-white shadow-lg shadow-black-300 flex z-[9999]">
          <div className=" px-24 py-12 "></div>
          <div className="absolute w-full h-full flex flex-col justify-evenly px-4">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `${isActive ? "text-brand-blue" : "text-gray-700"}`
              }
            >
              <div className="w-full flex gap-5  font-semibold">
                <ProfileCircle />
                <h1>Your Profile</h1>
              </div>
            </NavLink>
            <NavLink>
              <div className="w-full flex gap-5 text-gray-700 font-semibold">
                <LoginCurve />
                <h1>LogOut</h1>
              </div>
            </NavLink>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
