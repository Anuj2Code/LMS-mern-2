import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBooksDetails } from "../Actions/Books";
import Tilt from "react-parallax-tilt";
import Footer from "./Footer";

const BookDet = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.split("/")[2];
  const { books, loading } = useSelector((state) => state.bok);
  useEffect(() => {
    dispatch(getBooksDetails(id));
  }, [dispatch]);

  return (
    <>
      <div className="flex h-[110vh] w-[100vw] max-[900px]:w-[100%] max-[922px]:flex-col max-[922px]:items-center max-[922px]:mt-[26px] max-[922px]:min-h-[160vh] max-[450px]:h-[180vh]">
        <div className=" min-[900px]:h-[100vh] flex justify-center items-center min-[900px]:w-[50%] ">
          <Tilt
            className="background-stripes parallax-effect"
            perspective={1100}
          >
            <div className=" object-cover ">
              <img src={books && books.image} alt="" />
            </div>
          </Tilt>
        </div>
        <div className="bg-[#07080b] max-[910px]:w-[100%] h-[80%] max-[922px]:h-[78%] w-[45%] rounded-3xl pl-[35px] mt-[10px] flex items-center flex-col gap-6 ">
        <div className="mt-[35px]">
        <h1 className="text-[18px] font-sans font-medium w-[100%] text-center text-green-500">
            {books && books.title}
          </h1>
        </div>
          <span className="text-[18px] font-sans font-medium w-[100%] text-center">
            {books && books.subtitle}
          </span>
          <div className="flex gap-3 mt-[35px]">
            <span className="text-[20px] text-blue-600 font-sans font-medium ">
              Description{" "}
            </span>
            <p className="text-wrap w-[100%] text-[18px] mt-1">{books && books.description}</p>
          </div>
          <div className="w-[100%] flex flex-col gap-4">
            <div className="flex gap-14">
              <span className="text-[20px] text-blue-600 font-sans font-medium">
                Author
              </span>
              <p className="w-[100%] text-left text-[18px] mt-1">{books && books.authors}</p>
            </div>
            <div className="flex gap-8">
            <span className="text-[20px] text-blue-600 font-sans font-medium">
                Publisher
              </span>{" "}
            <p className="w-[100%] text-left text-[18px] mt-1">
              {books && books.publisher}
            </p>
            </div>
            <div className="flex ">
            <span className="text-[20px] text-blue-600 font-sans font-medium">
                Year of Publish
              </span>
            <p className="w-[100%] text-left text-[18px] mt-1">
              {books && books.year}
            </p>
            </div>
          </div>
          <div className="w-[100%] gap-5 flex flex-col">
        <div className="flex gap-[15px]">
        <span className="text-[20px] text-blue-600 font-sans font-medium ">
                important link
              </span>{" "}
            <p className="mt-[4px] text-[18px] ">
              <a
                href={books && books.url}
                className="hover:text-green-600 text-[#0ca6b4] hover:underline"
              >
                {books && books.url}
              </a>
            </p>
        </div>
          <div className="flex gap-[15px]">
          <span className="text-[20px] text-blue-600 font-sans font-medium ">
                Download link
              </span>{" "}
          <p className="mt-[4px] text-[18px]">
              <a
                href={books && books.download}
                className="hover:text-green-600 text-red-500 hover:underline"
              >
                {books && books.download}
              </a>
            </p>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BookDet;
