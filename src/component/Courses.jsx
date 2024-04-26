import React, { useState, useEffect } from "react";
import filter from "../Images/adjustment (2).png";
import { motion, AnimatePresence } from "framer-motion";
import cross from "../Images/close.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllCourse } from "../Actions/Course";
import CourseCard from "./CourseCard";
import se from "../Images/seo.png";
import Footer from "./Footer";

const Courses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id1 = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");

  const searchSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/courses/${keyword}`);
    } else {
      navigate("/courses");
    }
  };

  const { loading, course } = useSelector((state) => state.Allcourse);

  useEffect(() => {
    dispatch(getAllCourse(id1, currentPage, category));
  }, [dispatch, id1, currentPage, category]);

  const categories = [
    "Tech",
    "Non Tech",
    "Business",
    "12 Board",
    "10 Board",
    "Government Jobs",
  ];

  const [slide, setSlide] = useState(false);

  return (
    <>
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
          <div className="w-[100vw] flex min-h-[200vh] max-[950px]:h-[386vh]">
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
                      className="m-[16px] h-[42px] max-[505px]:h-[42px]"
                    />
                  </div>
                  <h1
                    className="text-[#1d4ed8]"
                    style={{
                      marginTop: "25px",
                      fontSize: "50px",
                      fontWeight: "bolder",
                    }}
                  >
                    Category
                  </h1>
                  <div className="box md:mt-[12px]  gap-[6px] ">
                    {categories.map((category) => {
                      return (
                        <div className="flex justify-center gap-[68px] pb-[20px] max-[505px]:text-[20px] text-[18px] uppercase font-semibold">
                          <motion.div
                            key={category}
                            onClick={() => setCategory(category)}
                            style={{ cursor: "pointer" }}
                            className="w-[100%] h-[35px] pt-[5px] text-center rounded-lg  text-white "
                            whileHover={{
                              scale: 1.1,
                            }}
                            whileTap={{
                              rotate: "3.5deg",
                            }}
                          >
                            {category}
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="w-[100%] h-[100vh]">
              <div className="flex justify-between">
                <div
                  className=" w-[85px] h-[80px] mt-[8px] min-[751px]:ml-[10px] max-[750px]:ml-[4px] flex justify-center items-center rounded-full min-[751px]:bg-black cursor-pointer  "
                  onClick={() => setSlide(!slide)}
                >
                  <img
                    src={filter}
                    alt=""
                    className=" h-[50px] max-[505px]:h-[42px] rounded-full"
                  />
                </div>
                <form action="" className="mr-[60px]" onSubmit={searchSubmit}>
                 <div className="flex gap-[15px]">
                 <img
                    src={se}
                    alt=""
                    className="h-[40px] mr-[10px]  w-[40px] mt-[25px]"
                  />
                  <input
                    type="text"
                    placeholder="Search Here ..."
                    className=" ml-[10px] md:h-[40px] md:mt-[19px] max-[900px]:w-[60vw] text-center border-3 rounded-2xl max-[785px]:h-[40px] w-[24vw] max-[785px]:mt-[22px] bg-[#403c3c] outline-none"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                 </div>
                </form>
              </div>
              {course.length === 0 ? (
                <div className="h-[60vh] flex justify-center items-center">
                  <div className="text-[45px] font-[static] text-wrap text-center">
                    Sorry No Course to Show
                  </div>
                </div>
              ) : (
                <div className=" min-h-[100vh] flex flex-wrap gap-x-[100px] gap-y-[150px] ml-[150px] mt-[40px]  max-[603px]:relative max-[603px]:right-[18vw] max-[500px]:right-[40vw]">
                  {course &&
                    course.map((product) => {
                      return <CourseCard product={product} loading={loading} />;
                    })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
      <Footer/>
    </>
  );
};

export default Courses;
