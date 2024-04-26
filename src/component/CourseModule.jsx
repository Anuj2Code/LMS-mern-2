import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getCourseDetails,
  newReview,
  reviewDel,
  addNotes,
  removeNotes,
} from "../Actions/Course";
import li from "../Images/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png";
import Footer from "./Footer";
import co from '../Images/course.png'
import { motion, AnimatePresence } from "framer-motion";
import cross from "../Images/close.png";

const CourseModule = () => {
  const location = useLocation();
  let arr = [];
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [curVide, setVid] = useState(0);
  const [ques, setQues] = useState("");
  const [reply, setRep] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { loading, courses } = useSelector((state) => state.details);
  let maId = courses && courses.lectures && courses.lectures[curVide]?._id;

  const [lectId, setLectId] = useState(maId);

  useEffect(() => {
    setLectId(maId);
  });
  let Courseid = id;
  let id8 = "";
  const user1 = JSON.parse(localStorage.getItem("user"));
  if (user1) {
    id8 = user1.data._id;
  } else {
    id8 = null;
  }
  const deleteReview = (lectId) => {
    dispatch(reviewDel(Courseid, id1, lectId));
  };

  useEffect(() => {
    dispatch(getCourseDetails(id));
  }, [dispatch, id]);

  let id1 = "";
  let username = "";
  let url = "";
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    id1 = user.data._id;
    username = user.data.username;
    url = user.data.avatar.url;
  } else {
    id1 = null;
    username = null;
    url = null;
  }
 const [id5,setid5] = useState("")

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    console.log(id5);
    myForm.set("ques", ques);
    myForm.set("reply", reply);
    dispatch(newReview(myForm, id, lectId, id5, id1, username, url));
    setQues("");
  };

  const [quesId, setques] = useState("");
  const [slide, setSlide] = useState(false);

  const reviewSubmitHandler1 = () => {
    const myForm = new FormData();
    myForm.set("title", title);
    myForm.set("description", description);
    dispatch(addNotes(myForm, id, id1, lectId, quesId));
    setTitle("");
    setDescription("");
  };

  const deleteNo = () => {
    dispatch(removeNotes(id, id1, lectId, quesId));
  };

  return (
    <>
      <div className="flex gap-[25px] w-[100vw] ">
        <div className="flex flex-col w-[75%]">
          <div className="ml-[25px] mt-[15px] ">
            {" "}
            <video
              src={
                courses &&
                courses.lectures &&
                courses.lectures[curVide]?.lecture?.secure_url
              }
              controls
              className="tar max-[480px]:mt-[10px] h-[600px] max-[1285px]:h-[468px] rounded-xl max-[450px]:h-[186px]"
            >
              {" "}
            </video>
          </div>
          <div className="flex gap-[40px] ml-[35px] mt-[20px]">
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className=" tab "
                aria-label="Q&A"
                checked
                style={{ width: "25vw" ,fontSize:'18px',height:'51px'}}
              />
              <div
                role="tabpanel"
                className="w-[69vw] min-h-[25vh] tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                <div className="min-h-[50vh]">
                  <div className="flex gap-[10px]">
                    <img
                      className="rounded-full w-[59px] h-[59px]"
                      src={url}
                      alt="Shoes"
                    />
                    <textarea
                      type="text"
                      value={ques}
                      onChange={(e) => setQues(e.target.value)}
                      placeholder="Ask Your Doubt"
                      className="bg-black w-[80%] rounded-xl p-[10px] h-[100px] text-[18px] text-[#779daa] border-[#202329] border-[1px] "
                    />
                    <button
                      className="bg-[#6674cc] w-[80px] h-[50px] flex justify-center items-center rounded-2xl mt-[15px] ml-[15px]"
                      onClick={() =>
                        reviewSubmitHandler()
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-send "
                      >
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </button>
                  </div>
                  <div>
                    {courses &&
                      courses.lectures &&
                      courses.lectures[curVide]?.question.map((i) => {
                        return (
                          <div className="card w-[50%] bg-base-100 shadow-xl">
                            <div className="card-body">
                              <div className="flex gap-[10px]">
                                <img
                                  className="rounded-full w-[39px] h-[39px]"
                                  src={i.url}
                                  alt="Shoes"
                                />
                                <h2 className="card-title">{i.name}</h2>
                                {id1 === i.user ? (
                                  <button
                                    className="btn rounded-xl"
                                    onClick={() =>
                                      document
                                        .getElementById("my_modal_5")
                                        .showModal()
                                    }
                                  >
                                    Delete
                                  </button>
                                ) : (
                                  ""
                                )}
                                <dialog
                                  id="my_modal_5"
                                  className="modal modal-bottom sm:modal-middle"
                                >
                                  <div className="modal-box">
                                    <h3 className="font-bold text-lg">
                                      Do you want to delete it ?
                                    </h3>
                                    <div className="modal-action flex ">
                                      <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button
                                          className="btn bg-red-800 rounded-2xl hover:bg-red-600 mr-[20px]"
                                          onClick={() => deleteReview(lectId)}
                                        >
                                          Delete
                                        </button>
                                        <button className="btn rounded-2xl">
                                          close
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </dialog>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                {id1 !== i.user ? (
                                  <div onClick={()=> setid5(i._id)}>
                                      <button
                                    className="btn rounded-xl text-[18px]"
                                    onClick={() =>
                                      document
                                        .getElementById("my_modal_4")
                                        .showModal()
                                    }
                                  >
                                    Reply
                                  </button>
                                  </div>
                                ) : (
                                  ""
                                )}
                                <dialog id="my_modal_4" className="modal">
                                  <div className="modal-box w-11/12 max-w-5xl">
                                    <textarea
                                      type="text"
                                      value={reply}
                                      onChange={(e) => setRep(e.target.value)}
                                      placeholder="Reply ..."
                                      className="bg-black w-[80%] rounded-xl p-[10px] h-[100px] text-[#779daa] border-[#202329] border-[1px] "
                                    />
                                    <div className="modal-action">
                                      <form method="dialog">
                                        <button
                                          className="btn bg-red-800 rounded-2xl hover:bg-red-600 mr-[20px]"
                                          onClick={() =>
                                            reviewSubmitHandler()
                                          }
                                        >
                                          Submit
                                        </button>
                                        <button className="btn rounded-2xl">
                                          Close
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </dialog>
                              </div>
                              <p className="text-[18px]">{i.ques}</p>
                              {i.reply ? (
                                <div className="flex ml-[35px] gap-[10px] mt-[10px]">
                                  <h1 className="text-[#7f8385] relative bottom-2">
                                    reply
                                  </h1>
                                  <div className="flex gap-[10px]">
                                    {" "}
                                    <img
                                      className="rounded-full w-[39px] h-[39px]"
                                      src={li}
                                      alt="Shoes"
                                    />
                                    <p className="text-[18px]">{i.reply}</p>
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className=" tab "
                aria-label="Resources"
                style={{ width: "10vw" ,fontSize:'18px',height:'51px'}}
              />
              <div
                role="tabpanel"
                className="w-[69vw] text-[18px] min-h-[25vh] tab-content bg-base-100 border-base-300 rounded-box p-6"
              >
                No Resources Uploaded Yet
              </div>
            </div>
          </div>
          <div className="min-h-[50vh]">
            <p className="w-[100vw] text-center text-[#1d4ed8] text-[40px] font-semibold mt-[30px] font-mono">
              Save your key Points
            </p>
            <button
              className="btn ml-[25px] text-[18px] mt-[30px]"
              onClick={() => document.getElementById("my_modal_8").showModal()}
            >
              Add Your key points
            </button>
              <button
                className="btn ml-[10px] text-[18px] mt-[30px]"
                onClick={() =>
                  document.getElementById("my_modal_80").showModal()
                }
              >
                Delete Your key points
              </button>
            <dialog id="my_modal_8" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="flex flex-col gap-[10px]">
                  <textarea
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title ..."
                    className="bg-black w-[80%] rounded-xl p-[10px] h-[60px] text-[#779daa] border-[#202329] border-[1px] "
                  />
                  <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description ..."
                    className="bg-black w-[80%] rounded-xl p-[10px] h-[100px] text-[#779daa] border-[#202329] border-[1px] "
                  />
                </div>
                <div className="modal-action">
                  <form method="dialog" onClick={() => setques("")}>
                    <button
                      className="btn bg-red-800 rounded-2xl hover:bg-red-600 mr-[20px]"
                      onClick={() => reviewSubmitHandler1()}
                    >
                      Add
                    </button>
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <div className="">
              {courses &&
                courses.lectures &&
                courses.lectures[curVide]?.notes.map((i) => {
                  return (
                    <div className="card w-96 bg-[#202329] m-[10px] rounded-2xl shadow-xl">
                      <div className="card-body">
                        <div className="flex gap-2">
                          <h2 className="card-title text-blue-500 mb-[10px]">
                            {i.title && i.title}
                          </h2>
                          <div onClick={() => reviewSubmitHandler1()}>
                            <div
                              onClick={() => setques(i._id)}
                              className="flex gap-3 ml-[35px]"
                            >
                              <button
                                className="btn w-[75px]"
                                onClick={() =>
                                  document
                                    .getElementById("my_modal_56")
                                    .showModal()
                                }
                              >
                                Edit
                              </button>
                              <div className="">
                                <dialog
                                  id="my_modal_80"
                                  className="modal modal-bottom sm:modal-middle"
                                >
                                  <div className="modal-box">
                                    <p className="py-4">
                                      Do you want to delete it ?
                                    </p>
                                    <div
                                      className="modal-action"
                                      onClick={() => setques(i._id)}
                                    >
                                      <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button
                                          className="btn bg-red-800 hover:bg-red-500 rounded-2xl mr-[10px] "
                                          onClick={() => deleteNo()}
                                        >
                                          delete
                                        </button>
                                        <button className="btn rounded-2xl">
                                          close
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </dialog>
                              </div>
                            </div>
                          </div>
                        </div>

                        <dialog id="my_modal_56" className="modal">
                          <div className="modal-box w-11/12 max-w-5xl">
                            <div className="flex flex-col gap-[10px]">
                              <textarea
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title ..."
                                className="bg-black w-[80%] rounded-xl p-[10px] h-[60px] text-[#779daa] border-[#202329] border-[1px] "
                              />
                              <textarea
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description ..."
                                className="bg-black w-[80%] rounded-xl p-[10px] h-[100px] text-[#779daa] border-[#202329] border-[1px] "
                              />
                            </div>
                            <div className="modal-action">
                              <form method="dialog">
                                <button
                                  className="btn bg-red-800 rounded-2xl hover:bg-red-600 mr-[20px]"
                                  onClick={() => reviewSubmitHandler1(i._id)}
                                >
                                  Add
                                </button>
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                        <p>{i.description && i.description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
       <div className="min-[1285px]:hidden flex w-[100%] justify-end p-[10px] mt-[65px] mr-[50px] max-[450px]:w-[250px]">
        <div className="max-[450px]:w-[100px]">
        <img src={co} alt=""  onClick={() => setSlide(!slide)} className="min-[1285px]:hidden h-[50px] w-[50px] hover:cursor-pointer "/>
        </div>
       </div>
       <AnimatePresence mode="wait">
              {slide && (
                <motion.div
                  className="filterbox bg-black top-0 h-[100vh] overflow-auto z-50 w-[100vw] flex fixed  items-center justify-start flex-col "
                  initial={{
                    x: -1000,
                  }}
                  animate={{
                    x: 0,
                  }}
                  exit={{
                    x: -1000,
                  }}
                  transition={{
                    type: "tween",
                    duration: 1,
                  }}
                >
                  {" "}
                  <div
                    className="w-[100%] flex justify-end p-[10px] "
                    onClick={() => setSlide(!slide)}
                  >
                    {" "}
                    <img
                      src={cross}
                      alt=""
                      className="m-[16px] h-[42px] max-[505px]:h-[42px] hover:cursor-pointer"
                    />
                  </div>
                  <div className="w-[100%] relative right-[20px] mt-[30px] text-center">
          {courses.lectures &&
            courses.lectures.map((i, ki) => {
              return (
                <div className="collapse collapse-plus bg-black w-[100%]  border-[#202329] border-b-[1px]">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    {i.title}
                  </div>
                  <div
                    className="collapse-content text-[#a1a5aa]"
                    onClick={() => setLectId(i._id)}
                  >
                    <p
                      className=" cursor-pointer mb-[15px] text-[18px]"
                      onClick={() => setVid(ki)}
                    >
                      Lecture {ki + 1}: {i.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
                </motion.div>
              )}
            </AnimatePresence>
        <div className="w-[25%] max-[1285px]:hidden relative right-[20px] mt-[30px] text-center">
          {courses.lectures &&
            courses.lectures.map((i, ki) => {
              return (
                <div className="collapse collapse-plus bg-black w-[100%]  border-[#202329] border-b-[1px]">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    {i.title}
                  </div>
                  <div
                    className="collapse-content text-[#a1a5aa]"
                    onClick={() => setLectId(i._id)}
                  >
                    <p
                      className=" cursor-pointer mb-[15px] text-[18px]"
                      onClick={() => setVid(ki)}
                    >
                      Lecture {ki + 1}: {i.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CourseModule;
