import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getold, getsimilarBooks } from "../Actions/Books";
import { useLocation,useNavigate } from "react-router-dom";
import imf from "../Images/location (1).png";
import im from "../Images/call.png";
import "animate.css";
import { userDetail } from "../Actions/Auth";
import { Link } from "react-router-dom";
import Policy from "./Policy";

const OldDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const id1 = location.pathname.split("/")[2];
  const { books, loading } = useSelector((state) => state.oldDet);
  const { user } = useSelector((state) => state.userDet);
  const { book } = useSelector((state) => state.sim);
  const data = {
    pathId:books.user,
    username:user && user.data && user.data.username,
    em:user && user.data && user.data.email
  };
const send=()=>{
  navigate('/adByUser',{ state: data });
}

  useEffect(() => {
    dispatch(getold(id1));
    dispatch(getsimilarBooks(id1));
  }, [dispatch, id1]);

  let id = books.user;
  useEffect(() => {
    dispatch(userDetail(id));
  }, [id]);

  return (
    <>
      <div className="h-[245vh] max-[1030px]:min-h-[331vh]">
      <div className="h-[100vh] w-[100vw] mt-[1.5px] ">
        <div className="w-[100%] flex  items-center h-[50%] bg-[#19191a] max-[1030px]:flex-col  max-[1030px]:justify-center">
          <div className="flex flex-col gap-[30px] min-[1031px]:ml-[100px]">
            <h1 className="text-[50px] text-blue-700 max-[528px]:text-[7vw] font-semibold animate__animated animate__bounce  animate__fast	800ms">
              {books && books.title}
            </h1>
            <div className="flex justify-between w-[560px] max-[657px]:w-auto max-[657px]:justify-around">
              <div className="flex gap-4">
                <img src={imf} alt="" className="h-[40px]" />
                <h1 className="text-[20px]">{books.city}</h1>
              </div>
              <div className="flex gap-4">
                <img src={im} alt="" className="h-[40px]" />
                <span className="text-[20px]">{books.MobileNumber}</span>
              </div>
            </div>
            <div className="flex gap-[160px] max-[657px]:hidden">
              <div className="flex gap-[30px] ">
                <p className="text-blue-500 text-[25px] ">Post on</p>
                <p className="text-[20px] mt-1">
                  {" "}
                  {new Date(
                    String(books.createdAt).substring(0, 10)
                  ).toDateString()}
                </p>
              </div>
              <div className="flex gap-[20px]">
                <p className="text-[22px]">₹ {books.price}</p>
                <p className="text-red-600 text-[23px] font-medium  uppercase">
                  {books.priceType}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] [100%] flex justify-center items-center max-[1030px]:flex-col">
          <div className="w-[40%] min-[722px]:ml-[65px] flex flex-col gap-16 max-[922px]:w-[60%]">
            <div className="h-[80%] object-cover">
              <img
                src={books && books.bookimage && books.bookimage.secure_url}
                alt=""
                className="rounded-2xl h-[400px]"
              />
            </div>
            <div>
              <p className="text-wrap w-[80%] h-auto text-[20px]">{books.Addescription}</p>
            </div>
          </div>
          <div className="">
            <div className="min-h-[100vh]  max-[1030px]:w-[83vw]  max-[1030px]:rounded-2xl  items-center rounded-b-2xl shadow-lg shadow-blue-600/50 w-[40vw] bg-[#2d2d2e] flex flex-col gap-[20px]  justify-center ">
              <div className="flex gap-[20px]  mt-[25px]">
                <div>
                  <img
                    src={user && user.data && user.data.avatar.url}
                    alt=""
                    style={{
                      height: "60px",
                      borderRadius: "200%",
                      objectFit: "cover",
                      width: "60px",
                    }}
                  />
                </div>
                <div onClick={()=> send()} className="flex flex-col">
                <span className=" text-[32px] text-blue-600 ">
                    {user && user.data && user.data.username} 
                  </span>
                  <span className=" hover:cursor-pointer  hover:underline">
                    view details
                  </span>
                </div>
              </div>
              <div className="flex justify-between w-[60%]">
                <p className="text-[26px]  max-[543px]:text-[18px] text-blue-500">Price</p>
                <p className="text-[25px]  max-[543px]:text-[18px] font-medium">₹ {books.price}</p>
              </div>
              <div className="flex justify-between w-[60%]">
                <p className="text-[26px]  max-[543px]:text-[18px] text-blue-500">Condition</p>
                <p className="text-[25px]  max-[543px]:text-[18px] font-medium">{books.ItemCondition}</p>
              </div>
              <div className="flex justify-between w-[60%]">
                <p className="text-[26px]  max-[543px]:text-[18px] text-blue-500">Author</p>
                <p className="text-[25px]  max-[543px]:text-[18px] font-medium">{books.Author}</p>
              </div>
              <div className="flex justify-between w-[60%]">
                <p className="text-[26px]  max-[543px]:text-[18px] text-blue-500">MRP</p>
                <p className="text-[25px]  max-[543px]:text-[18px] font-medium">₹ {books.Mrp}</p>
              </div>
              <div className="flex justify-between w-[60%]">
                <p className="text-[26px]  max-[543px]:text-[18px] text-blue-500">Edition</p>
                <p className="text-[25px]  max-[543px]:text-[18px] font-medium">{books.Edition}</p>
              </div>
              <div className="flex justify-between w-[60%]">
                <p className="text-[26px]  max-[543px]:text-[18px] text-blue-500">No Of Pages</p>
                <p className="text-[25px]  max-[543px]:text-[18px] font-medium">{books.NoPage}</p>
              </div>
              <div className="flex justify-between flex-col gap-[12px] mt-[10px] w-[50%]">
                <p className="text-[30px] text-blue-500 w-[100%] text-center  max-[543px]:text-[18px]">
                  Description
                </p>
                <p className="text-wrap text-[20px] font-medium w-[100%] text-center  max-[543px]:text-[18px]">
                  {books.description}
                </p>
              </div>
              <div className="w-[100%] flex justify-center mt-[15px] mb-[20px]">
                <button className="h-[50px] text-[20px] w-[60%] bg-green-700 hover:bg-green-500 text-white rounded-2xl">
                  <a href={`//api.whatsapp.com/send?phone=${books.MobileNumber}`} >
                    Whatsapp
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[50vh] relative top-[36px]">
          <h1 className="text-[40px] w-[100%] text-center text-green-500 font-semibold">
            Similar Used Books
          </h1>
          <div className="flex flex-wrap justify-center gap-y-[40px] gap-x-[40px] mt-[50px] mb-[25px]">
            {book &&
              book.map((i) => {
                return (
                  <div className="card card-compact min-w-[400px] h-[500px]  shadow-xl bg-[#181a1b] relative left-[65px] rounded-3xl ">
                    <figure>
                      <img
                        src={i.bookimage && i.bookimage.secure_url}
                        className="h-[308px] w-[85%] rounded-2xl"
                      />
                    </figure>
                    <Link to={`/detOldBooks/${i._id}`}>
                      <div className="card-body flex flex-col gap-[18px]">
                        <h2 className="card-title text-[25px]">{i.title}</h2>
                        <div className="flex ">
                          <p className="text-[20px] text-red-500">City</p>
                          <p className="text-blue-600 text-[25px]">{i.city}</p>
                        </div>
                        <div className="flex">
                          <p className="text-green-500 text-[20px]">
                            ₹ {i.price}
                          </p>
                          <p className="text-[18px]">{i.priceType}</p>
                        </div>
                        <div className="flex gap-[22px]">
                          <h1 className="text-[20px]"> Posted At</h1>
                          <h1 className="text-[20px]">
                            {new Date(
                              String(i.createdAt).substring(0, 10)
                            ).toDateString()}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
          <Policy/>
        </div>
      </div>
      </div>
    </>
  );
};

export default OldDetail;
