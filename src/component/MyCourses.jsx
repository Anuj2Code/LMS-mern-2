import React, { useEffect, useState } from "react";
import fi from "../Images/file.png";
import gp1 from "../Images/magnifier.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { myOrder } from "../Actions/Order";
import { Link } from "react-router-dom";
import mu from "../Images/mu.png";
import com from "../Images/computer.png";
import Footer from "./Footer";
import das from '../Images/dashboard.png'
import { motion, AnimatePresence } from "framer-motion";
import cross from "../Images/close.png";
import bk from '../Images/open-book.png'

const MyCourses = () => {
  const [slide, setSlide] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  let url = "";
  const { orders, loading } = useSelector((state) => state.myorder);
  console.log(orders);

  const user = JSON.parse(localStorage.getItem("user"));
  let id = "";
  let username = "";
  if (user) {
    id = user.data._id;
    username = user.data.username;
    url = user.data.avatar.url;
  } else {
    id = null;
    url = null;
    username = null;
  }

  useEffect(() => {
    dispatch(myOrder(id));
  }, [dispatch]);

  return (
    <>
      <div className="flex min-h-[100vh]">
      <AnimatePresence mode="wait">
              {slide && (
                <motion.div
                  className="filterbox bg-black top-0 h-[100vh] overflow-auto z-50 w-[30vw] flex fixed  items-center justify-start flex-col max-[750px]:w-[100%]"
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
                    className="w-[100%] flex justify-end p-[10px]"
                    onClick={() => setSlide(!slide)}
                  >
                    {" "}
                    <img
                      src={cross}
                      alt=""
                      className="m-[16px] h-[42px] max-[505px]:h-[42px]  hover:cursor-pointer"
                    />
                  </div>
          <h1 className="text-[#4b6dca] w-[100%] text-center text-[35px] font-medium mt-[40px]">
            Student Panel
          </h1>
          <div className="flex justify-center items-center h-[80%]">
            <div>
              <ul className="flex flex-col gap-[80px] ">
                <div className="flex gap-3 hover:text-[#d74674] cursor-pointer font-semibold">
                  <img
                    src={com}
                    className="h-[30px] w-[30px] mr-[10px]"
                    alt=""
                  />
                  <li className="text-[18px]">My Courses</li>
                </div>
                <div className="flex gap-3 hover:text-[#d74674] cursor-pointer font-semibold max-[950px]:hidden">
                  {" "}
                  <img
                    src={fi}
                    className="h-[30px] w-[30px] mr-[10px]"
                    alt=""
                  />
                  <Link to={"/purchase"}>
                    {" "}
                    <li className="text-[18px]">Purchase History</li>
                  </Link>
                </div>
                <Link to={"/askAI"}>
                  <div className="flex gap-3 hover:text-[#d74674] cursor-pointer font-semibold">
                    {" "}
                    <img
                      src={gp1}
                      className="h-[30px] w-[30px] mr-[10px]"
                      alt=""
                    />
                    <li className="text-[18px]">Ask AI</li>
                  </div>
                </Link>
                <Link to={"/sell"}>
                  <div className="flex gap-3 hover:text-[#d74674] cursor-pointer font-semibold">
                    <img
                      src={bk}
                      className="h-[30px] w-[30px] mr-[10px]"
                      alt=""
                    />
                    <li className="text-[18px]">Sell a Book</li>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
                </motion.div>
              )}
            </AnimatePresence>
      <img src={das} alt=""  onClick={() => setSlide(!slide)} className="min-[1070px]:hidden hover:cursor-pointer h-[30px] w-[30px] mt-[30px] ml-[10px]"/>
        <div className=" bg-[#202329] w-[350px] mt-[2px] max-[1070px]:hidden">
          <h1 className="text-[#4b6dca] w-[100%] text-center text-[25px] font-medium mt-[40px]">
            Student Panel
          </h1>
          <div className="flex justify-center items-center h-[80%]">
            <div>
              <ul className="flex flex-col gap-[80px] ">
                <div className="flex gap-3 hover:text-[#d74674] cursor-pointer font-semibold">
                  <img
                    src={com}
                    className="h-[30px] w-[30px] mr-[10px]"
                    alt=""
                  />
                  <li className="text-[18px]">My Courses</li>
                </div>
                <div className="flex gap-3 hover:text-[#d74674] cursor-pointer font-semibold max-[950px]:hidden">
                  {" "}
                  <img
                    src={fi}
                    className="h-[30px] w-[30px] mr-[10px]"
                    alt=""
                  />
                  <Link to={"/purchase"}>
                    {" "}
                    <li className="text-[18px]">Purchase History</li>
                  </Link>
                </div>
                <Link to={"/askAI"}>
                  <div className="flex gap-3 hover:text-[#d74674] cursor-pointer font-semibold">
                    {" "}
                    <img
                      src={gp1}
                      className="h-[30px] w-[30px] mr-[10px]"
                      alt=""
                    />
                    <li className="text-[18px]">Ask AI</li>
                  </div>
                </Link>
                <Link to={"/sell"}>
                  <div className="flex gap-3 hover:text-[#d74674] cursor-pointer font-semibold">
                    <img
                      src={bk}
                      className="h-[30px] w-[30px] mr-[10px]"
                      alt=""
                    />
                    <li className="text-[18px]">Sell a Book</li>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="flex flex-col gap-9 mt-[55px] w-[100vw] min-h-[100vh] justify-center items-center">
            <div className="flex flex-col gap-4 w-[50%] h-[30%]">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-[50%] h-[30%]">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-[50%] h-[30%]">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        ) : (
          <>
            {orders && orders.data && orders.data.length !== 0 ? (
              <div className="w-[80%] ">
                <h1 className="mt-[15px] w-[100%] text-[35px] text-center text-[#4b6dca] font-bold uppercase">
                  My Courses
                </h1>
                <div className="min-h-[100vh] mt-[35px] gap-x-[15px] gap-y-[15px] flex flex-wrap mb-[10px] max-[1070px]:justify-center">
                  {orders &&
                    orders.data &&
                    orders.data.map((idx) => {
                      return (
                        <div className="card w-[350px] h-[400px] ml-[20px] bg-[#181a1b] shadow-xl rounded-2xl">
                          <figure className="px-10 pt-10">
                            <img
                              src={idx.orderCourse.image}
                              alt="Shoes"
                              className="rounded-xl h-[150px]"
                            />
                          </figure>
                          <div className="card-body items-center text-center">
                            <h2 className="card-title text-[20px]">
                              {idx.orderCourse.title}
                            </h2>
                            <div className="card-actions flex flex-col">
                              <div>
                                <Link
                                  to={`/module/${idx.orderCourse.courseId}`}
                                >
                                  <button className="btn btn-primary rounded-2xl relative top-[15px] w-[150px] text-[18px]">
                                    Continue
                                  </button>
                                </Link>
                              </div>
                              <div>
                                <Link to={`/re/${idx.orderCourse.courseId}`}>
                                  <button className="btn btn-primary rounded-2xl relative top-[15px] w-[150px] text-[18px]" >
                                    Rate Us
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <div className="h-[100vh] w-[100vw] flex justify-center items-center">
                <div>
                  <div className="flex justify-center">
                    <img src={mu} alt="" className="h-[266px]" />
                  </div>
                  <p className="text-[35px] font-medium text-wrap">
                    Start learning from industry standard content today{" "}
                  </p>
                  <p className="text-[20px] w-[100%] text-center text-wrap font-normal text-slate-500">
                    When you enroll in a course, it will appear here
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default MyCourses;
