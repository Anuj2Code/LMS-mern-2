import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom'
import { getCourseDetails } from "../Actions/Course";
import ReactStars from "react-rating-stars-component";
import im1 from "../Images/doubt.svg";
import im2 from "../Images/start.svg";
import im3 from "../Images/tag.svg";
import im4 from "../Images/17.svg";
import im5 from "../Images/tv.svg";
import im6 from "../Images/rec.svg";
import Story from "./Story";
import AskedQuestion from "./AskedQuestion";
import Footer from './Footer';

const CourseDetails = () => {
  const location = useLocation();
  const id1 = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const { loading, courses } = useSelector((state) => state.details);
  const a = courses.ratings;
  useEffect(() => {
    dispatch(getCourseDetails(id1));
  }, [dispatch, id1]);
  return (
    <>
      <div className="min-h-[150vh] mt-[3px] max-[992px]:min-h-[268vh]">
        <div className="bg-[#19191a] h-[40vh] flex  justify-between gap-[15vw] ">
          <div className="flex flex-col justify-center min-w-[548px] ml-[10vw]">
            <h1 className="text-[30px] font-bold text-white">
              Welcome to the @Course <span className="text-blue-600">HUB</span>{" "}
            </h1>
            <h1 className="text-[28px] font-medium">{courses.title}</h1>
            <div className="flex mt-[35px] gap-10">
              <div className="text-[#23c45c] flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  class="w-6 h-6 mt-[5px] fill-green-500"
                >
                  <path d="M12 3a1.5 1.5 0 0 1 1.496 1.388l.004.112v1.657l1.57-.967a.938.938 0 0 1 1.426.708l.004.09v6.024a.938.938 0 0 1-1.35.842l-.08-.043-1.57-.968V13.5a1.5 1.5 0 0 1-1.388 1.496L12 15H3a1.5 1.5 0 0 1-1.496-1.388L1.5 13.5v-9a1.5 1.5 0 0 1 1.388-1.496L3 3zm0 1.5H3v9h9zm3 2.495-1.5.924v2.162l1.5.924z"></path>
                </svg>
                <h1 className="text-[20px] font-medium">
                  {courses.numberOfLectures} + Lectures
                </h1>
              </div>
              <div className="text-[#109fe7] flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  class="w-6 h-6 mt-[5px] fill-blue-500"
                >
                  <path d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m1.262 10.462c-.822.05-1.702.05-2.524 0 .101.59.231 1.12.383 1.574.189.567.397.972.592 1.22.066.083.167.244.288.244.11-.01.227-.17.286-.245.195-.247.403-.652.592-1.22.152-.452.282-.983.383-1.573m4.373-.896a8 8 0 0 1-.625.236c-.64.214-1.386.384-2.205.503-.119.82-.29 1.566-.502 2.205a8 8 0 0 1-.237.625 6.02 6.02 0 0 0 3.569-3.569m-11.27 0a6.02 6.02 0 0 0 3.569 3.569 8 8 0 0 1-.237-.625 13 13 0 0 1-.502-2.205c-.82-.119-1.566-.29-2.205-.502a8 8 0 0 1-.625-.237m4.189-3.512c-.073.962-.073 1.93 0 2.892.962.073 1.93.073 2.892 0 .073-.962.073-1.93 0-2.892a19 19 0 0 0-2.892 0m4.408.184c.05.822.05 1.702 0 2.524.59-.101 1.12-.231 1.574-.383.567-.189.972-.397 1.22-.592.082-.065.244-.168.244-.288-.01-.11-.17-.227-.245-.286-.247-.195-.652-.403-1.22-.592a11 11 0 0 0-1.573-.383m-5.924 0c-.59.102-1.12.231-1.574.383-.567.189-.972.397-1.22.592-.179.142-.234.25-.242.276-.034.112.172.242.243.298.247.195.652.403 1.22.592.452.152.983.282 1.573.383-.05-.822-.05-1.702 0-2.524m.896-4.373a6.02 6.02 0 0 0-3.569 3.569q.299-.128.625-.237c.64-.213 1.386-.383 2.205-.502.119-.82.29-1.566.502-2.205q.11-.326.237-.625m4.132 0q.128.299.236.625c.214.64.384 1.386.503 2.205.82.119 1.566.29 2.205.502q.326.109.625.237a6.02 6.02 0 0 0-3.569-3.569M9 3c-.104 0-.234.177-.287.245-.195.247-.403.652-.592 1.22a11 11 0 0 0-.383 1.573c.822-.05 1.702-.05 2.524 0-.101-.59-.231-1.12-.383-1.574-.189-.567-.397-.972-.592-1.22C9.234 3.178 9.104 3 9 3"></path>
                </svg>
                <h1 className="text-[20px]  font-medium">Hindi</h1>
              </div>
              <div className="flex gap-3 relative bottom-[2px]">
                <div className="text-[#fb9014] text-[20px] ">
                  {courses.numOfReviews}
                </div>
                <div className="relative bottom-[7px]">
                  <ReactStars
                    count={5}
                    size={28}
                    a11y={false}
                    value={courses.ratings || 4.5}
                    onChange={false}
                    edit={false}
                    isHalf={true}
                    activeColor={"rgb(251 144 20)"}
                  />
                </div>
              </div>
            </div>
          </div>
         <div>
         <div className="bg-[#202329]  max-[598px]:right-[636px] flex flex-col relative h-[820px] w-[450px] top-[100px] right-[100px] rounded-3xl max-[992px]:mt-[204px] max-[992px]:right-[559px] max-[479px]:right-[632px] max-[479px]:w-[368px]">
            <div className="flex w-[385px] h-[230px] pl-[10px] m-[32px] rounded-2xl object-cover ">
              <div>
                <img
                src={courses.thumbnail && courses.thumbnail.secure_url}
                alt=""
                className=" h-[100%] w-[432px] rounded-2xl object-cover max-[479px]:w-[300px]"
              />
              </div>
            </div>
            <div>
              <div className="flex justify-around">
                <h1 className="text-[28px] text-[#385d91] font-semibold">
                  ₹ {courses.price}
                </h1>
                <h1 className="text-[28px] text-[#606062] font-semibold line-through">
                  ₹ 7000
                </h1>
              </div>
              <div>
                <h1 className="text-[25px] font-medium ml-[38px] mt-[15px] text-white">
                  This Course Includes :
                </h1>
              </div>
              <div className="gap-[15px] flex flex-col ml-[38px] mt-[35px] text-white">
                <div className="flex gap-[15px] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    class="min-w-5 h-5 mt-[10px]"
                  >
                    <g
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      clip-path="url(#circle-check_svg__a)"
                    >
                      <path d="M12.75 2.503a7.5 7.5 0 1 0 3.6 4.997"></path>
                      <path
                        stroke-linejoin="round"
                        d="M6 9.375s1.125 0 2.625 2.625c0 0 4.17-6.875 7.875-8.25"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="circle-check_svg__a">
                        <path fill="#fff" d="M0 0h18v18H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[20px]">No Pre-requisite Required</span>
                </div>
                <div className="flex gap-[15px] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    class="min-w-5 h-5 mt-[10px]"
                  >
                    <g
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      clip-path="url(#circle-check_svg__a)"
                    >
                      <path d="M12.75 2.503a7.5 7.5 0 1 0 3.6 4.997"></path>
                      <path
                        stroke-linejoin="round"
                        d="M6 9.375s1.125 0 2.625 2.625c0 0 4.17-6.875 7.875-8.25"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="circle-check_svg__a">
                        <path fill="#fff" d="M0 0h18v18H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[20px]">
                    170+ hours On-Demand Video
                  </span>
                </div>
                <div className="flex gap-[15px] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    class="min-w-5 h-5 mt-[10px]"
                  >
                    <g
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      clip-path="url(#circle-check_svg__a)"
                    >
                      <path d="M12.75 2.503a7.5 7.5 0 1 0 3.6 4.997"></path>
                      <path
                        stroke-linejoin="round"
                        d="M6 9.375s1.125 0 2.625 2.625c0 0 4.17-6.875 7.875-8.25"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="circle-check_svg__a">
                        <path fill="#fff" d="M0 0h18v18H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  {courses.category === "Tech" ? (
                    <span className="text-[20px]">
                      400 + Coding Questions (asked by Top Companies)
                    </span>
                  ) : (
                    <span className="text-[20px]">
                      400+ Questions (asked by Top Companies of the world)
                    </span>
                  )}
                </div>
                <div className="flex gap-[15px] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    class="min-w-5 h-5 mt-[10px]"
                  >
                    <g
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      clip-path="url(#circle-check_svg__a)"
                    >
                      <path d="M12.75 2.503a7.5 7.5 0 1 0 3.6 4.997"></path>
                      <path
                        stroke-linejoin="round"
                        d="M6 9.375s1.125 0 2.625 2.625c0 0 4.17-6.875 7.875-8.25"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="circle-check_svg__a">
                        <path fill="#fff" d="M0 0h18v18H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  {courses.category === "Tech" ? (
                    <span className="text-[20px]">
                      Expert Sessions by Sr .SDE, StartUp Devs, Vps, Recruiters
                      etc.
                    </span>
                  ) : (
                    <span className="text-[20px]">
                      Expert Sessions from the Top Faculty of the Country
                    </span>
                  )}
                </div>
                <div className="flex gap-[15px] font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    class="min-w-5 h-5 mt-[10px]"
                  >
                    <g
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      clip-path="url(#circle-check_svg__a)"
                    >
                      <path d="M12.75 2.503a7.5 7.5 0 1 0 3.6 4.997"></path>
                      <path
                        stroke-linejoin="round"
                        d="M6 9.375s1.125 0 2.625 2.625c0 0 4.17-6.875 7.875-8.25"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="circle-check_svg__a">
                        <path fill="#fff" d="M0 0h18v18H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[20px]">
                    Live Resume & Interview Preparation
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[50px]">
           {user?
            <Link to={`/enroll/${id1}`}>  <button className="text-[20px] w-[300px] h-[45px]  hover:scale-105 rounded-2xl bg-[#1e40af] text-white  ">
            Buy Now
          </button></Link>:
           <Link to={`/signup`}>  <button className="text-[20px] w-[300px] h-[45px]  hover:scale-105 rounded-2xl bg-[#1e40af] text-white  ">
           Buy Now
         </button></Link>}
            </div>
          </div>
         </div>
        </div>
        <div className=" h-[100vh] w-[50%] flex flex-col items-center ml-[60px] max-[992px]:relative max-[992px]:top-[120vh]">
          <div>
            <h1 className="text-[30px] font-medium mt-[25px]">
              About the Course
            </h1>
            <p className="text-wrap text-[18px] font-medium mt-[40px]">
              {courses.About}
            </p>
          </div>
          <div className="h-[60vh] w-[100%] flex bg-[#16171c] rounded-3xl mt-[100px] max-[550px]:mt-[30px] gap-[20px]  max-[550px]:w-[194%] max-[763px]:w-[147%]   max-[763px]:ml-[120px]   max-[971px]:w-[150%] max-[420px]:hidden">
            <div className="w-[50%] h-[100%] flex flex-col gap-[65px] ml-[30px] justify-center">
              <div className="flex mt-[22px] gap-[15px]">
                <div className="bg-[#0f1d2b] border-[#109fe7] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                  <img src={im1} alt="" />
                </div>
                <h1 className="mt-[10px] text-[18px] max-[550px]:text-[15px]">Class Recording Provided Yes</h1>
              </div>
              <div className="flex gap-[15px]">
                <div className="bg-[#0f1d2b] border-[#109fe7] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                    <img src={im2} alt="" />
                </div>
                <h1 className="mt-[10px] text-[18px] max-[550px]:text-[15px]">Mode of the Course LIVE + Recordings</h1>
              </div>
              <div className="flex gap-[15px]  max-[764px]:hidden">
                <div className="bg-[#0f1d2b] border-[#109fe7] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                    <img src={im3} alt="" />
                </div>
                <h1 className="mt-[10px] text-[18px] max-[550px]:text-[15px]">Class starts on 21st August, 2023</h1>
              </div>
            </div>
            <div className="w-[50%] h-[100%] flex flex-col justify-center gap-[65px]">
              <div className="flex mt-[22px]">
                <div className="bg-[#0f1d2b] border-[#109fe7] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                    <img src={im4} alt="" />
                </div>
                <h1 className="mt-[10px] ml-[15px] text-[18px] max-[550px]:text-[15px]"> Course Validity 2 Years</h1>
              </div>
              <div className="flex gap-[15px]">
                <div className="bg-[#0f1d2b] border-[#109fe7] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                    <img src={im5} alt="" />
                </div>
                <h1 className="mt-[10px] text-[18px] max-[550px]:text-[15px]">class Timings 9pm - 11pm</h1>
              </div>
              <div className="flex gap-[15px] max-[764px]:hidden">
                <div className="bg-[#0f1d2b] border-[#109fe7] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                    <img src={im6} alt="" />
                </div>
                <h1 className="mt-[10px] text-[18px] max-[550px]:text-[15px]">Doubt Classes 20 Doubt Sessions</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Story id1={id1}/>
      <AskedQuestion/>
      <Footer/>
    </>
  );
};

export default CourseDetails;
