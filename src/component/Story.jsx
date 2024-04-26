import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCourseDetails } from "../Actions/Course";
import ReactStars from "react-rating-stars-component";

const Story = ({ id1 }) => {
  const dispatch = useDispatch();

  const { loading, courses } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getCourseDetails(id1));
  }, [dispatch, id1]);

  return (
    <div className="min-h-[80vh]">
      <div>
        <h1 className="text-[35px] font-medium ml-[35px] text-white">Our Success Stories</h1>
        <p className="text-[18px] w-[60%] ml-[35px] mt-[30px]">
          Discover inspiration and insights through recent reviews from our
          students. Their success stories reflect the transformative journey of
          learning and growth with CourseHub
        </p>
      </div>
      <div className="flex flex-wrap gap-x-[25px] gap-y-[25px] ml-[35px] mt-[40px]">
        {courses.reviews && courses.reviews.map((i)=>{
            return <div className="card min-w-96 bg-[#17161c] min-h-[250px] shadow-xl rounded-2xl  hover:shadow-blue-800/50">
            <div className="w-[100%] h-[69px]  flex ml-[35px] items-center gap-5 mt-[10px]" >
              <img
              className="rounded-full w-[59px] h-[59px]"
                src={i.url}
                alt="Shoes"
              />
              <h1 className="text-[20px]">{i.name}</h1>
            </div>
            <div className="card-body">
              <p className="text-[20px]">{i.comment}</p>
              <ReactStars
                      count={5}
                      size={28}
                      a11y={false}
                      value={i.rating || 4.5}
                      onChange={false}
                      edit={false}
                      isHalf={true}
                      activeColor={"rgb(251 144 20)"}
                    />
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default Story;
