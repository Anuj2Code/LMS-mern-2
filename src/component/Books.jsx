import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks } from "../Actions/Books";
import {Link} from 'react-router-dom'
import Footer from "./Footer";

const Books = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(getAllBooks(search));
  }, [dispatch, search]);

  return (
    <>
      <div className="w-[100vw] flex items-center justify-center h-[80px]">
        <div className="w-[60%] max-[1290px]:mt-[100px]  max-[1290px]:w-[70%]">
          <div className="flex justify-between w-[100%]">
            <div>
              <h1 className=" text-blue-600 text-[40px] text-center  max-[711px]:text-[20px] max-[550px]:hidden max-[1290px]:text-[20px]  max-[1290px]:pt-[15px]">
                # Recommendated books
              </h1>
            </div>
            <div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="w-[25vw] h-[40px] rounded-2xl mt-[10px] pl-[20px]  bg-[#3f3b3d] max-[550px]:w-[60vw]"
                placeholder="Search ..."
              />
            </div>
          </div>
        </div>
      </div>
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
        {books && books.length!==0?
          <div className="min-h-[160vh] flex flex-wrap gap-x-[100px] gap-y-[125px] ml-[250px] mt-[60px]   max-[450px]:right-[70vw]  max-[590px]:right-[60vw] max-[711px]:right-[23vw] relative  ">
          {books &&
            books.slice(0, 27).map((i) => {
              return (
               <Link to={`/det/${i.id}`}>
                <div className="card card-compact w-96 min-h-[480px] shadow-xl bg-[#181a1b] hover:scale-105 duration-100 relative left-[65px] rounded-3xl">
                  <figure>
                    <img
                      src={i.image}
                      alt="Shoes"
                      className="h-[318px] w-[80%] rounded-b-2xl"
                    />
                  </figure>
                  <div className=" card-body">
                    <h2 className="card-title "></h2>
                    <p className="text-[22px] leading-7 text-[#e8e6e3] font-semibold">
                      {i.title}
                    </p>
                    <p className="text-[20px]">
                      <span className="pr-[10px] text-green-500 font-medium text-[18px]">
                        Author
                      </span>
                      {i.authors?.split(",")[0]}
                    </p>
                    <div className="card-actions justify-between"></div>
                  </div>
                </div>
               </Link>
              );
            })}
        </div>:
        <div className="h-[60vh] w-[100vw] flex justify-center items-center">
           <h1 className="text-[45px] font-mono font-bold text-blue-600">No Books Found !</h1>
          </div>}
        </>
      )}
      <Footer/>
    </>
  );
};

export default Books;
