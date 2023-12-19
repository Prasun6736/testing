//  i have to use useDispatch for [seding value to my store] react/redux
import { useDispatch } from "react-redux";
// importing auth.js for creating object
import Auth from "../appwrite/services/auth";
// importing methods from slices
import { login, logout } from "../store/authSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import image1 from "../assets/login1.png";
import image2 from "../assets/login2.png";
import myimg from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [useremail, setUsermail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function registration(email, password, name) {
    let data = await Auth.createAccount({ email, password, name });
    dispatch(login(data));
    // window.localStorage.setItem("userData",data)
  }

  function verifyData(username, useremail, pass, confirmpass) {
    if (
      username != "" &&
      useremail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) &&
      pass.length > 8 &&
      pass === confirmpass
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit() {
    if (verifyData(username, useremail, pass, confirmpass)) {
      registration(useremail, pass, username);
      navigate("/dashboard");
    } else {
      toast.warning("Check Input Details (Password, confirm_pass, and email)");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex justify-center items-center">
        <div
          className="flex flex-col-reverse lg:flex-row max-w-5xl sm:m-10 md:mx-32 lg:mx-5 w-full bg-white sm:rounded-t-xl sm:rounded-b-xl overflow-hidden shadow-lg"
          style={{ minHeight: "600px" }}
        >
          <div className="min-h-full lg:w-1/2 w-full p-16 px-8 sm:px-16">
            <div className="flex flex-col justify-between h-full gap-10 sm:gap-4">
              <div>
                <div className="text-2xl font-semibold text-black">
                  Register Yourself 😀
                </div>
                <div className="text-sm text-black/70">
                  Welcome to your dream
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium text-sm">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your full name"
                    className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-blue-100 transition-all ease-in-out focus:border-blue-400 focus:border-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={useremail}
                    onChange={(e) => setUsermail(e.target.value)}
                    placeholder="Enter your Email"
                    className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-blue-100 transition-all ease-in-out focus:border-blue-400 focus:border-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="font-medium text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter your password"
                    className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-blue-100 transition-all ease-in-out focus:border-blue-400 focus:border-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="font-medium text-sm">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confpassword"
                    name="confpassword"
                    value={confirmpass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="Confirm your password"
                    className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-blue-100 transition-all ease-in-out focus:border-blue-400 focus:border-2"
                  />
                </div>
              </div>
              <div>
                <Link>
                  <button
                    className="px-5 py-4 mb-1 text-lg rounded-xl text-white font-semibold w-full bg-left transition-all duration-500 ease-in-out bg-gradient-to-br from-brand-blue to-blue-400 hover:bg-gradient-to-bl"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
                <span className="text-sm">
                  Already have an account?
                  <Link to="/login">
                    <span className="text-blue-500 text-sm"> Signin now.</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="h-96 sm:h-auto sm:min-h-full lg:w-1/2 relative p-10 sm:p-16  rounded-b-3xl overflow-hidden lg:rounded-none bg-gradient-to-br from-blue-600 to-blue-400">
            <img
              src={""}
              className="absolute right-0 bottom-0 w-3/5 z-0"
              alt=""
            />
            <div className="bg-brand-blue border-white border-2 shadow-lg text-white p-6 sm:p-10 rounded-xl w-full h-full relative z-0">
              <div className="text-xl font-semibold">Oh! Hello👋</div>
              <div className="text-xl font-semibold">
                Be the next Proud of India.
              </div>
              <div className="text-2xl font-bold mt-10">Signup Now</div>

              <img
                src={myimg}
                className="absolute  -right-8 sm:-right-16 lg:-right-7 -bottom-10 sm:-bottom-16 lg:bottom-0 w-3/6 lg:w-4/6 max-h-72 object-contain z-10"
                alt=""
              />
              <div className="shadow-xl absolute -left-6 sm:-left-10 bottom-10 w-16 lg:w-24 h-16 lg:h-24 bg-white z-0 rounded-full p-1">
                <img src={image1} className="drop-shadow-md" alt="" />
              </div>
              <div className="shadow-xl absolute -right-6 sm:-right-10 top-16 w-16 h-16 bg-white z-0 rounded-full p-1 flex justify-center items-center">
                <img src={image2} className="drop-shadow-md" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
