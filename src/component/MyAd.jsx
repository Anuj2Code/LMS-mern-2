import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getapniBooks,deleteBooks } from "../Actions/Books";
import Footer from "./Footer";

const MyAd = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { usebook } = useSelector((state) => state.apni);
  const user = JSON.parse(localStorage.getItem("user"));
  const [del,setdel] = useState("")
  console.log(del);
  let id = "";
  if (!user) {
    id = null;
  } else {
    id = user.data._id;
  }

  useEffect(() => {
    dispatch(getapniBooks(id));
    dispatch(deleteBooks(del));
  }, [dispatch,del]);


  return (
    <>
      <h1 className="w-[100%] text-[35px] font-semibold text-blue-500 text-center mt-[20px]">
        My AD
      </h1>
   <div className="w-[100vw] flex justify-center">
    <div>
    {usebook.length != 0 ? (
        <div className=" min-h-[100vh] flex flex-wrap  ml-[150px] mt-[40px] ">
          {usebook &&
            usebook.map((i) => {
              return (
                <div className="card card-side bg-zinc-700 rounded-2xl h-[350px] w-[650px] shadow-xl m-[20px]">
                  <div className="object-cover">
                    <figure>
                      <img
                        src={i.bookimage && i.bookimage.secure_url}
                        alt="Movie"
                        className="h-[350px] rounded-l-2xl"
                      />
                    </figure>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title text-[22px]">{i.title}</h2>
                    <p className="text-[20px]">
                      ₹ {i.price} <span>{i.priceType}</span>
                    </p>
                    <p className="text-[20px]">
                      Location{" "}
                      <span className="text-white font-semibold pl-[10px]">
                        {i.city}
                      </span>
                    </p>
                    <p className="text-[20px] pr-[5px]">
                      Posted On{" "}
                      <span className="text-white font-semibold pl-[10px]">
                        {" "}
                        {new Date(
                          String(i.createdAt).substring(0, 10)
                        ).toDateString()}
                      </span>
                    </p>
                  </div>
                  <button className="btn btn-circle btn-outline m-[10px]" onClick={()=> setdel(i._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
          <div>
            <p className="text-[45px] text-blue-500 font-semibold">
              No AD for Book has been Posted yet
            </p>
          </div>
        </div>
      )}
    </div>
   </div>
      <Footer/>
    </>
  );
};

export default MyAd;
