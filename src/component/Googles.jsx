import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../Actions/News";
import "./Goo.css";
import tec from "../Images/tech.jpg";

const Googles = () => {
  const dispatch = useDispatch();
  const { news, loading } = useSelector((state) => state.news);
  console.log(news);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(news);

  const setCurrentPageNo = () => {
    setCurrentPage(currentPage + 1);
  };
  const setCurrentPageNo2 = () => {
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    dispatch(getNews(currentPage));
  }, [dispatch, currentPage]);

  console.log(currentPage);
  return (
    <>
      <h1 className="text-blue-600 text-[45px] w-[100%] mt-[15px] font-medium text-center">
        # Recent's News article
      </h1>
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
          {news && news.articles && news.articles.length !== 0 ? (
            <div className="flex flex-col w-[100vw] min-h-[150vh]  items-center gap-3 mt-[50px]">
              {news.articles &&
                news.articles.map((i) => {
                  return (
                    <div className="flex  border-b-2 border-slate-500 w-[70%] h-[300px] max-[850px]:h-[100vh] max-[1103px]:flex-col-reverse max-[1103px]:h-[70vh]  max-[1103px]:items-center max-[1103px]:justify-center">
                      <div className="flex flex-col w-[70%] gap-[22px] justify-center">
                        <div className="text-sm breadcrumbs max-[1103px]:hidden">
                          <ul>
                            <li>
                              <a className="text-[20px] text-blue-600">
                                Source
                              </a>
                            </li>
                            <li>
                              <a rel="noreferrer" href={i.url} target="_blank" className="text-[18px]">
                                {i.source.name}
                              </a>
                            </li>
                            <li>
                              <a className="text-[20px] text-blue-600">
                                Published at
                              </a>
                            </li>
                            <li>
                              <a className="text-[18px]">
                                {new Date(
                                  String(i.publishedAt).substring(0, 10)
                                ).toDateString()}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <a className="text-[22px] text-wrap leading-7 font-semibold hover:scale-105 duration-100 hover:text-blue-600 hover:underline hover:cursor-pointer" rel="noreferrer" href={i.url} target="_blank">
                          {i.title}
                        </a>
                        <p className="text-[18px] max-[495px]:text-[15px] ">{i.description}</p>
                      </div>
                      <div>
                        <div className="w-[370px] h-[210px] m-[32px] rounded-2xl object-cover bg-[#606062] flex justify-center items-center">
                          {
                            i.urlToImage!=null?
                            <img
                            src={i.urlToImage}
                            alt=""
                            className="w-[350px] h-[190px] rounded-2xl"
                          />:
                          <img
                          src={tec}
                          alt=""
                          className="w-[350px] h-[190px] rounded-2xl"
                        />
                          }
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="w-[100%] h-[150px] flex justify-center items-center text-center">
              <p className="text-[40px] font-serif">No Data to show</p>
            </div>
          )}
          <div className="w-[100%] flex justify-center">
            <div className="w-[50%] flex justify-between mt-[80px]">
              <div className="">
                {currentPage !== 1 ? (
                  <button
                    className="w-[100px] h-[40px] rounded-2xl bg-blue-600"
                    onClick={() => setCurrentPageNo2()}
                  >
                    Prev
                  </button>
                ) : (
                  <button className="w-[100px] h-[40px] rounded-2xl bg-blue-600 disabled cursor-not-allowed">
                    Prev
                  </button>
                )}
              </div>
              <div className="mb-[10px]">
                {news.articles && news.articles.length !== 0 ? (
                  <button
                    className="w-[100px] h-[40px] rounded-2xl bg-blue-600"
                    onClick={() => setCurrentPageNo()}
                  >
                    Next
                  </button>
                ) : (
                  <button className="w-[100px] h-[40px] rounded-2xl bg-blue-600 disabled cursor-not-allowed">
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Googles;
