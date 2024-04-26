import React, { useEffect, useState } from "react";
import sec from "../Images/secure.svg";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom'
import { getCourseDetails } from "../Actions/Course";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Enroll = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id1 = location.pathname.split("/")[2];
    const dispatch = useDispatch();

  const { loading, courses } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getCourseDetails(id1));
  }, [dispatch, id1]);

  const obj = {
    "CoursePrice":courses.price,
    "totalPrice":courses.price,
    "orderCourse":
        {
            "title":courses.title,
            "price":courses.price,
            "image":courses.thumbnail && courses.thumbnail.secure_url,
            "courseId": courses._id
        }
}

  const send= ()=>{
    navigate('/payment',{ state: obj })
  }
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <div className=" self-end h-[55px] mt-[20px] mr-[30px]">
          <div className="flex gap-3 ">
            <img src={sec} alt="" />
          <p className="text-green-500 mt-[3px]">100% Safe & Secure</p>
          </div>
        </div>
        <div className="flex justify-center items-start mt-[70px] ">
          <div className="card w-[450px]  h-[495px] bg-[#202329] rounded-2xl hover:shadow-green-600/80 shadow-lg">
             <h1 className="w-[100%] text-center mt-[5px] text-[30px] font-semibold text-white">Order Details</h1>
             <div className="flex gap-5 mt-[30px] ">
               <div className="w-[50%] object-cover ml-[10px]"> <img src={courses.thumbnail && courses.thumbnail.secure_url} alt="" className="rounded-2xl"/></div>
               <div><p className="text-[20px] font-medium text-wrap">{courses.title}</p></div>
             </div>
            <div className="card-body">
              <div className="flex justify-between">
                <div><p className="text-[21px] text-[#6674cc]">Subtotal</p></div>
                <div><p>  ₹ {courses.price}</p></div>
              </div>
              <div className="flex justify-between">
               <div> <p className="text-[21px] text-[#6674cc]">Discount</p></div>
               <div> <p >- ₹ 0.00</p></div>
              </div>
              <div className="flex justify-between ">
                <div><p className="text-[21px] text-[#6674cc] font-bold">Total</p></div>
                <div><p>₹ {courses.price}</p></div>
              </div>
              
            </div>
           <div className="w-[100%] flex justify-center">
                <button className="bg-blue-900 hover:bg-blue-500 relative bottom-8 rounded-2xl w-[60%] h-[50px]" onClick={()=> send()}>Proceed To CheckOut</button>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Enroll;
