import React, { useState, useEffect } from "react";
import se from "../Images/seo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllOldBooks } from "../Actions/Books";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Policy from "./Policy";

const Oldbooks = () => {
  const dispatch = useDispatch();
  const [search,setsearch] = useState('');
  const { loading, oldbooks } = useSelector((state) => state.ob);
  
  useEffect(() => {
    dispatch(getAllOldBooks(search));
  }, [dispatch,search]);
  return (
    <>
      <div className="flex max-[550px]:flex-col max-[550px]:gap-[20px]">
        <h1 className="h-[30px] w-[100%] text-center text-[40px] mt-[15px] font-serif text-blue-500 max-[877px]:mt-7 max-[877px]:text-[150%]">
          Buy Second Hand Books Online In India
        </h1>
        <img
          src={se}
          alt=""
          className="h-[40px] mr-[10px]  w-[40px] mt-[25px] max-[550px]:hidden"
        />
        <div>
          <div>
            <input
              value={search}
              onChange={(e)=> setsearch(e.target.value)}
              type="text"
              className="w-[20vw] h-[40px] rounded-2xl mt-[24px] outline-none pl-[20px] mr-[20px]  bg-[#3f3b3d] max-[550px]:w-[80vw] max-[550px]:ml-[15px]"
              placeholder="Search ..."
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className=" w-[50%] text-[32px] text-blue-500 mt-[45px] font-medium ml-[30px] max-[877px]:hidden">
          Featured Used Books
        </h1>
      </div>
      <div className="min-h-[160vh] flex flex-wrap gap-x-[100px] gap-y-[25px] ml-[250px] mt-[60px]  max-[450px]:right-[70vw]  max-[590px]:right-[60vw] max-[711px]:right-[23vw] relative">
        {oldbooks &&
          oldbooks.map((i) => {
            return (
              <div className="card card-compact min-w-[400px] h-[500px]  shadow-xl bg-[#181a1b] relative left-[65px] rounded-3xl mb-[15px]">
                <figure>
                  <img
                    src={i.bookimage && i.bookimage.secure_url}
                    className="h-[308px] w-[85%] rounded-2xl"
                  />
                </figure>
                <Link to={`/detOldBooks/${i._id}`}>
                <div className="card-body flex flex-col gap-[18px]">
                  <h2 className="card-title text-[20px]">{i.title}</h2>
                  <div className="flex ">
                    <p className="text-[22px] text-red-500">City</p>
                    <p className="text-blue-600 text-[20px]">{i.city}</p>
                  </div>
                  <div className="flex">
                    <p className="text-green-500 text-[20px]">₹ {i.price}</p>
                    <p className="text-[18px]">{i.priceType}</p>
                  </div>
                  <div className="flex gap-[65px]">
                    <h1 className="text-[22px]"> Posted At</h1>
                    <h1 className="text-[18px]">
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
      <Footer/>
    </>
  );
};

export default Oldbooks;
