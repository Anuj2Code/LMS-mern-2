import React, { useState, useEffect } from "react";
import fla from "../Images/blue-flame-icon-png-23.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import li from "../Images/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png";
import us from "../Images/user.png";
import ls from "../Images/book.png";
import sb from "../Images/sidebar.png";
import cros from "../Images/close.png";
import bk from '../Images/open-book.png'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let admin = "";
  if (!user) {
    admin = null;
  } else {
    admin = user.data.role;
  }
  let image = "";
  if (!user) {
    image = null;
  } else {
    image = user.data.avatar.url;
  }
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    toast.success("Logout successfull !");
    navigate("/");
  };
  const [slide, setSlide] = useState(false);
  return (
    <>
      <div className=" w-[100vw] h-[70px]  justify-around shadow-md shadow-blue-500/50 flex  ">
        <ToastContainer />
        <AnimatePresence mode="wait">
              {slide && (
                <motion.div
                  className="filterbox bg-black top-0 h-[100vh] overflow-auto z-50 w-[100vw] flex fixed  items-center justify-start flex-col "
                  initial={{
                    x: -1000,
                  }}
                  animate={{
                    x: 0,
                  }}
                  exit={{
                    x: -1000,
                  }}
                  transition={{
                    type: "tween",
                    duration: 1,
                  }}
                >
                  {" "}
                  <div
                    className="w-[100%] flex justify-end p-[10px] "
                    onClick={() => setSlide(!slide)}
                  >
                    {" "}
                    <img
                      src={cros}
                      alt=""
                      className="m-[16px] h-[42px] max-[505px]:h-[42px] hover:cursor-pointer"
                    />
                  </div>
                  <div className="relative top-6  text-semibold">
          <ul className=" flex gap-16 text-[25px] font-semibold flex-col">
            <Link to={"/"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer text-center">Home</li>
            </Link>
            <Link to={"/courses"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer  text-center">
                Course
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer text-center ">
                Contact
              </li>
            </Link>
            <Link to={"/book"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer text-center ">
                E-Books
              </li>
            </Link>
            <Link to={"/oldBooks"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer text-center ">
                Old Books
              </li>
            </Link>
            <Link to={"/articles"}>
              {" "}
              <li className="hover:text-[#1d4ed8] cursor-pointer text-center ">
                Articles
              </li>
            </Link>
          </ul>
        </div>
                </motion.div>
              )}
            </AnimatePresence>
        <div
          className=" w-[85px] h-[70px] min-[1004px]:hidden  min-[751px]:ml-[10px] max-[750px]:ml-[4px] flex justify-center items-center rounded-full min-[751px]:bg-black cursor-pointer  "
          onClick={() => setSlide(!slide)}
        >
          <img
            src={sb}
            alt=""
            className=" h-[50px] max-[505px]:h-[42px] rounded-full"
          />
        </div>
        <div className="flex relative min-[1010px]:right-[150px]">
          <img
            src={fla}
            alt=""
            className="h-[45px] max-[505px]:h-[42px] mt-[12px]"
          />
          <h1 className=" relative  max-[363px]:mt-[30px] min-[364px]:mt-[19px] min-[600px]:left-[20px] min-[364px]:text-[22px] font-bold max-[363px]:text-[18px]">
            Course <span className="text-[#1d4ed8]">HUB</span>
          </h1>
        </div>
        <div className="relative top-6 max-[1088px]:hidden text-semibold">
          <ul className=" flex gap-4 text-[20px]">
            <Link to={"/"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer">Home</li>
            </Link>
            <Link to={"/courses"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer max-[1104px]:hidden">
                Course
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer max-[1204px]:hidden">
                Contact
              </li>
            </Link>
            <Link to={"/book"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer max-[1270px]:hidden">
                E-Books
              </li>
            </Link>
            <Link to={"/oldBooks"}>
              <li className="hover:text-[#1d4ed8] cursor-pointer max-[1285px]:hidden">
                Old Books
              </li>
            </Link>
            <Link to={"/articles"}>
              {" "}
              <li className="hover:text-[#1d4ed8] cursor-pointer max-[1285px]:hidden">
                Articles
              </li>
            </Link>
          </ul>
        </div>
        <div>
          {user != null && image ? (
            <div className="dropdown dropdown-bottom">
              <img
                tabIndex={0}
                role="button"
                src={image}
                className="relative left-[75px]"
                alt=""
                style={{
                  height: "45px",
                  borderRadius: "200%",
                  objectFit: "cover",
                  width: "45px",
                  marginTop: "13px",
                }}
              />
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-[#202329] rounded-2xl w-52 mt-[10px] "
              >
                <li className="flex rounded-2xl ">
                  <div>
                    {" "}
                    <img
                      src={us}
                      className="h-[30px] w-[30px] mr-[10px]"
                      alt=""
                    />
                    <Link to={"/profile"}>
                      <a className="text-[#5459e3] font-medium text-[15px]">
                        My Profile
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    {" "}
                    <img
                      src={ls}
                      className="h-[30px] w-[30px] mr-[10px]"
                      alt=""
                    />
                    <Link to={"/mycourses"}>
                      <a className="text-[#5459e3] font-medium text-[15px]">
                        My Courses
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    {" "}
                    <img
                      src={bk}
                      className="h-[30px] w-[30px] mr-[10px]"
                      alt=""
                    />
                    <Link to={"/myAd"}>
                      <a className="text-[#5459e3] font-medium text-[15px]">
                        My Books AD
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <img
              src={li}
              className="relative left-[75px]"
              alt=""
              style={{
                height: "45px",
                borderRadius: "100%",
                width: "45px",
                marginTop: "13px",
              }}
            />
          )}
        </div>
        <div className="flex gap-5 text-[16px]">
          {user == null ? (
            <div className="">
              <Link to={"/signup"}>
                <button className="text w-[200px] h-[35px] mt-[17px] rounded-2xl bg-[#1e40af] text-white max-[667px]:hidden min-[1085px]:ml-[36px] max-[1227px]:ml-[45px]">
                  Register
                </button>
              </Link>
            </div>
          ) : (
            <div className="">
              <button
                className="text w-[200px] h-[35px] mt-[17px] rounded-2xl  bg-[#1e40af]  text-white max-[667px]:hidden text-[15px] min-[1085px]:ml-[36px] max-[1227px]:ml-[45px] "
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
