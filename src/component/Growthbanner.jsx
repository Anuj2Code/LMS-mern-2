import React from "react";
import im1 from "../Images/akshay-kumar-6.webp";
import im2 from "../Images/shahrukh-khan.jpg";
import im3 from "../Images/kholi.webp";
import im4 from "../Images/dhoni.jpg";
import Tilt from 'react-parallax-tilt';
import { Glow ,GlowCapture} from '@codaworks/react-glow'
import {Link} from 'react-router-dom'

const Growthbanner = () => {
  return (
    <>
          <div className="w-[100%] flex justify-center min-[804px]:hidden max-[804px]:mt-[351px]">
              <div className="  w-[76%] h-[100%] ml-[25px] rounded-2xl flex flex-col gap-[15px] justify-center max-[804px]:w-[76%] ">
                <h1 className=" text-[20px] text-[#e8456c] font-semibold ">
                Why We're Your
                </h1>
                <h1 className=" z-50 text-[30px] leading-[40px] text-[#ffffff] font-semibold glow:text-glow/50">
                Best Learning Choice?
                </h1>
                <p className=" z-50 text-[#abafb5] glow:text-glow/20 text-[18px] leading-7">
                Choose CourseHUB for an unparalleled learning experience.
                </p>
                <div className="mt-[30px] z-50 ">
                  <Link to={'/contact'}>
                  <button className=" text w-[170px] h-[45px] text-[17px] hover:scale-105 rounded-2xl bg-[#1e40af] text-white  ">
                    Let's Connect
                  </button>
                  </Link>
                </div>
              </div>
              </div>
              <div className="bg-[#1076ad] w-[79px] max-[804px]:hidden h-[79px] rounded-full flex justify-center items-center  border border-[#1076ad] relative left-[137px] top-10 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" class="w-6 h-6 fill-white"><path d="m16.885 2.564.354.051c.55.087 1.166.233 1.544.612.38.38.526.995.613 1.545l.051.353c.116.834.146 1.928-.051 3.142-.389 2.395-1.664 5.252-4.866 7.466q-.022.246-.015.492l.015.498c.01.332.004.663-.088.98-.174.606-.795 1.005-1.375 1.29l-.284.135-.367.162-.25.1c-.648.248-1.43.421-1.941-.091-.232-.232-.34-.547-.426-.863l-.042-.157a16 16 0 0 0-.52-1.645 3 3 0 0 1-.181.2c-.5.498-1.177.75-1.855.944l-.45.124-.449.119-.438.11-.396.092-.474.1-.296.058a.925.925 0 0 1-1.079-1.079l.102-.505.118-.53.114-.467.206-.775c.204-.751.453-1.526 1.008-2.08l.091-.088-.7-.25-.702-.243c-.412-.136-.845-.279-1.144-.577-.546-.547-.314-1.4-.042-2.07l.152-.354.126-.276c.29-.618.703-1.33 1.36-1.518.317-.092.648-.097.98-.089l.498.017c.165.002.33 0 .492-.016 2.213-3.202 5.071-4.477 7.467-4.866a10.7 10.7 0 0 1 3.14-.05m-2.847 1.86c-2.015.328-4.463 1.407-6.374 4.28-.232.35-.623.515-1.022.578a4 4 0 0 1-.68.046l-.686-.01q-.17-.002-.342.006c-.278.37-.473.81-.618 1.247l1.375.5.565.213c1.034.406 2.035.896 2.805 1.666 1.297 1.297 1.956 2.994 2.433 4.727.418-.146.838-.334 1.194-.6l.005-.342-.01-.684c0-.227.01-.455.046-.682.062-.399.229-.79.577-1.022 2.874-1.91 3.953-4.359 4.28-6.374a8.9 8.9 0 0 0 .045-2.597 5 5 0 0 0-.177-.82 5 5 0 0 0-.82-.176 8.9 8.9 0 0 0-2.596.045m-7.575 9.817c-.321.387-.47.896-.59 1.4l-.1.43-.05.206.636-.149c.504-.12 1.014-.27 1.4-.591a.917.917 0 1 0-1.296-1.296m5.185-6.481a1.833 1.833 0 1 1 2.593 2.594 1.833 1.833 0 0 1-2.593-2.595"></path></svg>
          </div>
          <Tilt className="background-stripes parallax-effect" perspective={1100}>
          <GlowCapture>
    <Glow color='indigo'>
      <div className="max-[1086px]:w-[100%]  max-[804px]:hidden glow:bg-[#2d3b84] w-[80%] hover:border-4 hover:border-slate-500 flex flex-col justify-center rounded-[35px] items-center relative min-[1086px]:left-[11vw] h-[400px] gap-12">
        <div className="flex rounded-3xl w-[35vw] h-[55px] justify-center gap-[35px] border border-red-500 max-[1290px]:w-[61vw]">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src={im1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={im2} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={im4} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={im3} />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[25px] mt-[6px] font-semibold ">
              60,000 + Happy Students
            </h1>
          </div>
        </div>
        <div className="flex gap-10  ">
          <div className="card w-48 border border-slate-500 bg-base-100 shadow-xl rounded-2xl">
            <div className="card-body">
              <h2 className="card-title ml-[30px] text-center text-[25px] font-semibold">50 %</h2>
              <p className="ml-[10px] text-[#9ea2a8]">Average Salary</p>
            </div>
          </div>
          <div className="card w-48 border border-slate-500 bg-base-100 shadow-xl rounded-2xl">
            <div className="card-body">
              <h2 className="card-title ml-[30px] text-center text-[25px] font-semibold">600 +</h2>
              <p className="ml-[10px] text-[#9ea2a8]">Diffrent Course</p>
            </div>
          </div>
          <div className="card w-48 border border-slate-500 bg-base-100 shadow-xl rounded-2xl">
            <div className="card-body">
              <h2 className="card-title ml-[30px] text-center text-[25px] font-semibold">50000 +</h2>
              <p className="ml-[10px] text-[#9ea2a8]">Career Transtion</p>
            </div>
          </div>
          <div className="card w-48 border border-slate-500 bg-base-100 shadow-xl rounded-2xl">
            <div className="card-body">
              <h2 className="card-title ml-[30px] text-center text-[25px] font-semibold">400 +</h2>
              <p className="ml-[10px] text-[#9ea2a8]">Hiring Partners</p>
            </div>
          </div>
        </div>
      </div>
      </Glow>
</GlowCapture>
      </Tilt>
    </>
  );
};

export default Growthbanner;
