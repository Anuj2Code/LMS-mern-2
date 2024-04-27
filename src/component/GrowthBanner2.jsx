import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import {Link} from 'react-router-dom'

const GrowthBanner2 = () => {
  return (
    <>
  <div className="flex w-[100%] justify-end">
  <div className="bg-[#23c45c]  w-[79px] h-[79px] rounded-full flex justify-center items-center  border border-[#23c45c] relative right-[100px] top-[110px] z-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" class="fill-pastelGreen-500 w-6 h-6 fill-white"><path d="m16.885 2.564.354.051c.55.087 1.166.233 1.544.612.38.38.526.995.613 1.545l.051.353c.116.834.146 1.928-.051 3.142-.389 2.395-1.664 5.252-4.866 7.466q-.022.246-.015.492l.015.498c.01.332.004.663-.088.98-.174.606-.795 1.005-1.375 1.29l-.284.135-.367.162-.25.1c-.648.248-1.43.421-1.941-.091-.232-.232-.34-.547-.426-.863l-.042-.157a16 16 0 0 0-.52-1.645 3 3 0 0 1-.181.2c-.5.498-1.177.75-1.855.944l-.45.124-.449.119-.438.11-.396.092-.474.1-.296.058a.925.925 0 0 1-1.079-1.079l.102-.505.118-.53.114-.467.206-.775c.204-.751.453-1.526 1.008-2.08l.091-.088-.7-.25-.702-.243c-.412-.136-.845-.279-1.144-.577-.546-.547-.314-1.4-.042-2.07l.152-.354.126-.276c.29-.618.703-1.33 1.36-1.518.317-.092.648-.097.98-.089l.498.017c.165.002.33 0 .492-.016 2.213-3.202 5.071-4.477 7.467-4.866a10.7 10.7 0 0 1 3.14-.05m-2.847 1.86c-2.015.328-4.463 1.407-6.374 4.28-.232.35-.623.515-1.022.578a4 4 0 0 1-.68.046l-.686-.01q-.17-.002-.342.006c-.278.37-.473.81-.618 1.247l1.375.5.565.213c1.034.406 2.035.896 2.805 1.666 1.297 1.297 1.956 2.994 2.433 4.727.418-.146.838-.334 1.194-.6l.005-.342-.01-.684c0-.227.01-.455.046-.682.062-.399.229-.79.577-1.022 2.874-1.91 3.953-4.359 4.28-6.374a8.9 8.9 0 0 0 .045-2.597 5 5 0 0 0-.177-.82 5 5 0 0 0-.82-.176 8.9 8.9 0 0 0-2.596.045m-7.575 9.817c-.321.387-.47.896-.59 1.4l-.1.43-.05.206.636-.149c.504-.12 1.014-.27 1.4-.591a.917.917 0 1 0-1.296-1.296m5.185-6.481a1.833 1.833 0 1 1 2.593 2.594 1.833 1.833 0 0 1-2.593-2.595"></path></svg>
          </div>
  </div>
      <Tilt className="background-stripes parallax-effect" perspective={2000}>
      <GlowCapture>
          <Glow >
            <div className="glow:bg-[#23c45c] max-[804px]:mt-[259px]  overflow-hidden shadow-xl  w-[80%] hover:border-4 hover:border-[#23c45c] flex min-[1011px]:mt-[75px] justify-center rounded-[35px] items-center relative left-[11vw] h-[600px] gap-12">
              <div className="max-[804px]:w-[76%] w-[40%] h-[100%] ml-[25px] flex flex-col gap-[15px] justify-center  ">
                <h1 className=" text-[20px] text-[#23c45c] font-semibold ">
                  Who are We
                </h1>
                <h1 className=" z-50 text-[30px] leading-[40px] text-[#ffffff] font-semibold glow:text-glow/50">
                  Empowering Coders, Enabling Dreams
                </h1>
                <p className=" z-50 text-[#abafb5] glow:text-glow/20 text-[18px] leading-7">
                  Unveil the essence of CourseHub: a community-driven platform
                  dedicated to empowering coders of all levels. Discover who we
                  are and how we're shaping the future of coding education.
                </p>
                <div className="mt-[30px] z-50 ">
                  <Link to={'/contact'}>
                  <button className=" text w-[170px] h-[45px] text-[17px] hover:scale-105 rounded-2xl bg-[#1e40af] text-white  ">
                    Let's Connect
                  </button>
                  </Link>
                </div>
              </div>
              <div className="w-[60%] flex flex-col items-center  z-50 max-[804px]:hidden">
                <motion.div
                  className="card w-96 bg-[#0d0d0d] shadow-xl m-[10px]  hover:shadow-green-300/30 rounded-xl"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{
                    ease: "linear",
                    type: "tween",
                    repeat: Infinity,
                    duration: 8.5,
                  }}
                >
                  <div className="card-body">
                    <div className="bg-[#c16d04] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        class="w-6 h-6 fill-mandy-500"
                      >
                        <path d="M14.667 2.75c.47 0 .857.354.91.81l.006.107v.916h1.834c.966 0 1.758.748 1.828 1.697l.005.137v11c0 .966-.748 1.758-1.697 1.828l-.136.005H4.583a1.833 1.833 0 0 1-1.828-1.697l-.005-.136v-11c0-.967.748-1.759 1.697-1.829l.136-.005h1.834v-.916a.917.917 0 0 1 1.827-.107l.006.107v.916h5.5v-.916c0-.507.41-.917.917-.917m2.75 8.25H4.583v6.417h12.834zm0-4.583H4.583v2.75h12.834z"></path>
                      </svg>
                    </div>
                    <p className="text-[#23c45c] text-xl mt-[10px] font-semibold">
                      Glow : Elevate your Career
                    </p>
                    <p className="text-[18px]">
                      Emphasize that your courses are crafted by industry
                      experts to ensure high-quality, up-to-date content
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="card w-96 bg-[#0d0d0d] shadow-xl m-[10px]  hover:shadow-green-300/30 rounded-xl"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{
                    ease: "linear",
                    type: "tween",
                    repeat: Infinity,
                    duration: 8,
                  }}
                >
                  <div className="card-body">
                    <div className="bg-[#ef476f] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        class="w-6 h-6 fill-white"
                      >
                        <path d="M14.667 2.75c.47 0 .857.354.91.81l.006.107v.916h1.834c.966 0 1.758.748 1.828 1.697l.005.137v11c0 .966-.748 1.758-1.697 1.828l-.136.005H4.583a1.833 1.833 0 0 1-1.828-1.697l-.005-.136v-11c0-.967.748-1.759 1.697-1.829l.136-.005h1.834v-.916a.917.917 0 0 1 1.827-.107l.006.107v.916h5.5v-.916c0-.507.41-.917.917-.917m2.75 8.25H4.583v6.417h12.834zm0-4.583H4.583v2.75h12.834z"></path>
                      </svg>
                    </div>
                    <p className="text-[#ef476f] text-xl mt-[10px] font-semibold">
                      Apply: Build, Play, Creater
                    </p>
                    <p className="text-[18px]">
                      Emphasize that your courses are crafted by industry
                      experts to ensure high-quality, up-to-date content
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="card w-96 bg-[#0d0d0d] shadow-xl m-[10px]  hover:shadow-green-300/30 rounded-xl"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{
                    ease: "linear",
                    type: "tween",
                    repeat: Infinity,
                    duration: 8,
                  }}
                >
                  <div className="card-body">
                    <div className="bg-blue-500 w-[63px] h-[59px] rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                        class="w-6 h-6 fill-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 1.834a1.833 1.833 0 0 0-1.833 1.833v14.667A1.834 1.834 0 0 0 5.5 20.167h10.083a2.75 2.75 0 0 0 2.75-2.75V4.584a2.75 2.75 0 0 0-2.75-2.75zm3.667 1.833H5.5v14.667h10.083a.917.917 0 0 0 .917-.917V4.584a.917.917 0 0 0-.917-.917h-.916v8.228c0 .825-.998 1.237-1.58.654l-1.17-1.17-1.17 1.17c-.583.583-1.58.17-1.58-.654zm3.666 0H11v6.037l.262-.262a.926.926 0 0 1 1.31 0l.261.262z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-blue-500 text-xl mt-[10px] font-semibold">
                      Hands-On Learning Experience
                    </p>
                    <p className="text-[18px]">
                      Bring ideas to life in CodeHelp's Apply. Build projects,
                      play in boot playgrounds—all in your browser.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="card w-96 bg-[#0d0d0d] shadow-xl m-[10px]  hover:shadow-green-300/30 rounded-xl"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{
                    ease: "linear",
                    type: "tween",
                    repeat: Infinity,
                    duration: 8,
                  }}
                >
                  <div className="card-body">
                    <div className="bg-[#23c45c] w-[63px] h-[59px] rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        class="w-6 h-6 fill-white"
                      >
                        <path d="m16.885 2.564.354.051c.55.087 1.166.233 1.544.612.38.38.526.995.613 1.545l.051.353c.116.834.146 1.928-.051 3.142-.389 2.395-1.664 5.252-4.866 7.466q-.022.246-.015.492l.015.498c.01.332.004.663-.088.98-.174.606-.795 1.005-1.375 1.29l-.284.135-.367.162-.25.1c-.648.248-1.43.421-1.941-.091-.232-.232-.34-.547-.426-.863l-.042-.157a16 16 0 0 0-.52-1.645 3 3 0 0 1-.181.2c-.5.498-1.177.75-1.855.944l-.45.124-.449.119-.438.11-.396.092-.474.1-.296.058a.925.925 0 0 1-1.079-1.079l.102-.505.118-.53.114-.467.206-.775c.204-.751.453-1.526 1.008-2.08l.091-.088-.7-.25-.702-.243c-.412-.136-.845-.279-1.144-.577-.546-.547-.314-1.4-.042-2.07l.152-.354.126-.276c.29-.618.703-1.33 1.36-1.518.317-.092.648-.097.98-.089l.498.017c.165.002.33 0 .492-.016 2.213-3.202 5.071-4.477 7.467-4.866a10.7 10.7 0 0 1 3.14-.05m-2.847 1.86c-2.015.328-4.463 1.407-6.374 4.28-.232.35-.623.515-1.022.578a4 4 0 0 1-.68.046l-.686-.01q-.17-.002-.342.006c-.278.37-.473.81-.618 1.247l1.375.5.565.213c1.034.406 2.035.896 2.805 1.666 1.297 1.297 1.956 2.994 2.433 4.727.418-.146.838-.334 1.194-.6l.005-.342-.01-.684c0-.227.01-.455.046-.682.062-.399.229-.79.577-1.022 2.874-1.91 3.953-4.359 4.28-6.374a8.9 8.9 0 0 0 .045-2.597 5 5 0 0 0-.177-.82 5 5 0 0 0-.82-.176 8.9 8.9 0 0 0-2.596.045m-7.575 9.817c-.321.387-.47.896-.59 1.4l-.1.43-.05.206.636-.149c.504-.12 1.014-.27 1.4-.591a.917.917 0 1 0-1.296-1.296m5.185-6.481a1.833 1.833 0 1 1 2.593 2.594 1.833 1.833 0 0 1-2.593-2.595"></path>
                      </svg>
                    </div>
                    <p className="text-[#23c45c] text-xl mt-[10px] font-semibold">
                      Glow : Elevate your Career
                    </p>
                    <p className="text-[18px]">Climb with CodeHelp's Grow. Upskill through Code</p>
                  </div>
                </motion.div>
              </div>
            </div>
</Glow>
        </GlowCapture>
      </Tilt>
    </>
  );
};

export default GrowthBanner2;
