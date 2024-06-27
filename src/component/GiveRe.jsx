import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Review } from "../Actions/Course";
import Footer from "./Footer";

const GiveRe = () => {
  const location = useLocation();
  const ID = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  let url = "";
  const { success, error } = useSelector((state) => state.rv);
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

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("CourseID", ID);
    myForm.set("url", url);
    dispatch(Review(myForm, id,username));

  };

  if (success) {
    toast.success("Review submitted");
  }

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <>
      <ToastContainer theme="dark" />
      <h1 className="w-[100%] text-center text-[35px] font-serif text-red-600 font-semibold mt-[15px]">
        Rate Our Course
      </h1>
      <div className="w-[100%] h-[100vh] flex justify-center mt-[55px] ">
        <div className=" h-[60%] w-[350px] bg-[#29caad] rounded-2xl shadow-2xl shadow-blue-500/70">
          <div className="w-[100%] flex items-center justify-center relative mt-[55px]">
            <Rating
              precision={0.5}
              name="size-large"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              size="large"
            />
          </div>
          <div className="flex justify-center items-center h-[60%] w-[90%]">
            <textarea
              className="bg-white border-2 border-black w-[100%] ml-[50px] text-black"
              cols="30"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className=" flex justify-center">
            <button
              className="w-[180px] rounded-2xl h-[40px] bg-blue-800 text-white"
              onClick={()=> reviewSubmitHandler()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GiveRe;
