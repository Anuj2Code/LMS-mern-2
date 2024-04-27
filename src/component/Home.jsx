import React, { useEffect,useState } from "react";
import CourseCard from "./CourseCard";
import { getAllCourse } from "../Actions/Course";
import { useDispatch, useSelector } from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import hero from "../Images/hero.png";
import node from "../Images/node-js-512.webp";
import { motion } from "framer-motion";
import Growthbanner from "./Growthbanner";
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import GrowthBanner2 from "./GrowthBanner2";
SwiperCore.use([Pagination, Navigation]);
import css from '../Images/css.svg'
import js from '../Images/js.svg'
import vue from '../Images/vue.svg'
import Ang from '../Images/angular.svg'
import react from '../Images/react.svg'
import Foot1 from "./Foot1";
import Poster from "./Poster";
import AppFeature from "./AppFeature";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Loader.css";
import HashLoader from "react-spinners/HashLoader";
import Footer from './Footer';
import AskedQuestion from "./AskedQuestion";
import Asked from "./Asked";

const Home = () => {
  const dispatch = useDispatch();
  const [load, setload] = useState(false);

  const { loading, course, courseCount } = useSelector(
    (state) => state.Allcourse
  );

  useEffect(() => {
    setload(loading);
  }, [loading]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 300,
      easing: "ease-in-sine",
      once: false,
      delay: 100,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);
  return (
    <>
      {load?  <div className="fixed top-0 bottom-0 h-[100vh] w-[100vw] bg-black  flex justify-center items-center flex-col-reverse gap-[10px] ">
      <div className="relative top-[150px]">
       <HashLoader
         color={"#ffffff"}
         size={90}
         aria-label="Loading Spinner"
         data-testid="loader"
       />
     </div>
        <div
          data-aos="zoom-in"
          className="sg text-[65px] text-black font-medium "
        >
          WELCOME TO COURSE HUB
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[150px] w-[150px]"
          id="svg"
          viewBox="0 0 512 512"
        >
          <path d="M415.4 512h-95.1L212.1 357.5v91.1L125.7 512H28V29.8L68.5 0h108.1l123.7 176.1V63.5L386.7 0h97.7v461.5zM38.8 35.3V496l72-52.9V194l215.5 307.6h84.8l52.4-38.2h-78.3L69 13zm82.5 466.6l80-58.8v-101l-79.8-114.4v220.9L49 501.9h72.3zM80.6 10.8l310.6 442.6h82.4V10.8h-79.8v317.6L170.9 10.8zM311 191.7l72 102.8V15.9l-72 53v122.7z" />
        </svg>
      </div> :<>
        <div className="h-[80vh] w-[100vw] max-[804px]:flex-col bg-[#040507] flex justify-center items-center mt-[15px]">
        <div className="h-[80vh] w-[50%] flex flex-col items-center justify-center max-[804px]:mt-[379px]">
          <h1 className="min-[999px]:text-[2.5vw] max-[998px]:text-[3.5vw] font-bold text-[#ffffff] max-[804px]:w-[73vw] max-[804px]:text-center">
            Upskilling Made
            <span className="text-[#1d4ed8] font-bold ml-[15px] uppercase">
              <Typewriter
                words={["Practical", "Easy", "Affordable"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={130}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h1 className="w-[80%] max-[804px]:w-[155%] text-[17px] mt-[35px]">
            Course Hub is the one-stop destination for your upskilling journey.
            Brace yourself to find the best job-ready courses and high-end
            technologies available in the sector. And if that weren't good
            enough, get the highest quality course content at the most
            affordable prices!
          </h1>
       <div className="w-[100%] flex ml-[150px] mt-[30px] ">
        <div>
        <Link to={'/courses'}><button className=" text-[15px] w-[180px] h-[38px]  min-[1010px]:right-[170px] hover:scale-105 rounded-2xl bg-[#1e40af] text-white  ">
            View Course
          </button></Link>
        </div>
       </div>
        </div>
        <div className="w-[60%] h-[80vh] flex justify-center">
          <motion.div
            className=" shadow-blue-500/50 max-[1250px]:hidden"
            initial={{ y: 0 }}
            animate={{
              y: [300, 0, 300],
            }}
            transition={{
              type: "tween",
              ease: "linear",
              repeat: Infinity,
              duration: 10,
            }}
          >
            <img src={node} alt="" className="h-[71px] mt-[15px] " />
          </motion.div>
          <img src={hero} alt="" style={{ height: "auto" }} className="max-[500px]:relative max-[500px]:top-[61px]"/>
          <motion.div
            className=" shadow-blue-500/50 max-[1250px]:hidden"
            initial={{ y: 0 }}
            animate={{
              y: [0, 300, 0],
            }}
            transition={{
              type: "tween",
              ease: "linear",
              repeat: Infinity,
              duration: 10,
            }}
          >
            <img src={react} alt="" className="h-[71px] mt-[15px] relative left-[20px]" />
          </motion.div>
        </div>
      </div>
      <Growthbanner />
      <GrowthBanner2/>
      <div className="w-[100vw] h-[350px] flex flex-col justify-center items-center gap-5">
        <div><p className="text-[#abafb5] text-[20px] font-medium">50+ POWERFUL IN-BROWSER IDE TEMPLATES TO PRACTICE ON</p></div>
        <div className="flex gap-[25px]">
         <div className="tooltip tooltip-info" data-tip="CSS">
         <img className='hover:scale-125 duration-150 ' src={css} alt="" />
         </div>
         <div className="tooltip tooltip-success" data-tip="Javascript">
         <img className='hover:scale-125 duration-150' src={js} alt="" />
         </div>
          <div className="tooltip tooltip-success" data-tip="Vue">
          <img className='hover:scale-125 duration-150' src={vue} alt="" />
          </div>
          <div className="tooltip tooltip-error" data-tip="Angular">
          <img className='hover:scale-125 duration-150' src={Ang} alt="" />
          </div>
          <div className="tooltip tooltip-info" data-tip="React">
          <img className='hover:scale-125 duration-150' src={react} alt="" />
          </div>
        </div>
      </div>
      <h1 className="h-[150px] w-[100%] mt-[18px] text-white text-center text-[35px] font-semibold">What would you like to <span className="text-[#6e96cf]">learn?</span></h1>
      <div className="mt-[15px] max-[1285px]:hidden ">
      <Swiper
          slidesPerView={3}
          spaceBetween={5}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
        >
        <div className="jai mt-[50px] min-h-[140vh]  flex flex-wrap justify-center gap-y-4 gap-x-4 ">
          {course &&
            course.slice(0, 6).map((product) => {
             return <SwiperSlide >
               <CourseCard product={product} />
            </SwiperSlide>
            })}
        </div>
        </Swiper>
      </div>
      <div className="min-[1285px]:hidden flex justify-center pr-[22vw] max-[500px]:pr-[40vw]">
      <div className="jai mt-[50px] min-h-[140vh]  flex flex-wrap justify-center gap-y-4 gap-x-4 ">
          {course &&
            course.slice(0, 4).map((product) => {
             return <CourseCard product={product} />
            })}
        </div>
      </div>
      <Foot1/>
      <Poster/>
      <AppFeature/>
      <Asked/>
    </>}
    <Footer/>
      </>
      
  );
};

export default Home;
