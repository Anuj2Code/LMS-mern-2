import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getapniBooks,Email } from "../Actions/Books";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BOOKS_EMAIL_REST} from '../constants/Books'
import Footer from "./Footer";

const AdbyUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location.state;
  const { usebook } = useSelector((state) => state.apni);
  const [name,setname]= useState('')
  const [email,setemail]= useState('')
  const [sub,setsub]= useState('')
  const [mess,setmess]= useState('');
  const em1 = data.em;
  const {ok,error} = useSelector((state)=> state.em);

  useEffect(() => {
    dispatch(getapniBooks(data.pathId));
  }, [dispatch]);


  const sendemail=()=>{
    const myForm = new FormData();
    myForm.set("email",email);
    myForm.set("message",mess);
    myForm.set("subject",sub);
    dispatch(Email(myForm,em1));
    dispatch({ type: BOOKS_EMAIL_REST });
  }
   useEffect(()=>{
    if(error){
        toast.error(error.message)
    }
   },[error])

  if(ok){
    toast.success('Email sent successfully')
  }
  return (
    <>
      <ToastContainer theme="dark" style={{fontSize:'15px'}}/>
      <div className="flex w-[100vw] min-h-[100vh] max-[1268px]:flex-col max-[1268px]:justify-center max-[1268px]:items-center">
        <div className="flex flex-col w-[50%] relative min-[1268px]:top-[150px] min-[1268px]:items-center min-[1268px]:h-[130vh]">
          <div>
            <h1 className="w-[100%] text-center text-[30px] font-medium text-blue-500">AD Posted by {data.username}</h1>
            <div className=" flex flex-wrap  min-[1268px]:ml-[150px] max-[1268px]:w-[100vw] max-[1268px]:relative max-[1268px]:right-[20vw] max-[843px]:right-[10vw] ">
              {usebook &&
                usebook.map((i) => {
                  return (
                    <div className="card card-side bg-zinc-700 rounded-2xl h-[350px] min-[1268px]:w-[650px] shadow-xl m-[20px] max-[600px]:w-[70%]">
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
                        <h2 className="card-title text-[22px] max-[550px]:text-[15px] ">{i.title}</h2>
                        <p className="text-[20px] max-[550px]:text-[15px] ">
                          ₹ {i.price} <span>{i.priceType}</span>
                        </p>
                        <p className="text-[20px] max-[550px]:text-[15px] ">
                          Location <span className="text-white font-semibold pl-[10px]">{i.city}</span>
                        </p>
                        <p className="text-[20px]  max-[550px]:text-[15px] pr-[5px]">
                          Posted On{" "}
                         <span className="text-white font-semibold pl-[10px]"> {new Date(
                            String(i.createdAt).substring(0, 10)
                          ).toDateString()}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center relative min-[1268px]:top-[150px]  max-[710px]:w-[100%]">
            <div className="bg-zinc-700 w-[450px] h-[600px] flex flex-col justify-center items-center rounded-2xl shadow-xl shadow-blue-500/50">
              <h1 className="text-[35px]  text-blue-400 font-medium">Contact</h1>
              <div className="flex flex-col gap-4">
              <div>
              <input type="text" placeholder="Name" value={name} onChange={(e)=> setname(e.target.value)} className="w-[300px] h-[50px] ml-[20px] outline-none pl-[10px]"/>
              </div>
               <div>
                <input type="text" placeholder="Email" value={email} onChange={(e)=> setemail(e.target.value)} className="w-[300px] h-[50px] ml-[20px] outline-none pl-[10px]"/>
               </div>
               <div>
                <input type="text" placeholder="Subject" value={sub} onChange={(e)=> setsub(e.target.value)} className="w-[300px] h-[50px] ml-[20px] outline-none pl-[10px]"/>
               </div>
              <div>
                <textarea placeholder="Message" value={mess} onChange={(e)=> setmess(e.target.value)} id="" cols="30" rows="10" className="ml-[20px] outline-none pl-[10px]"></textarea>
              </div>
              <div>
                <button type="submit" onClick={()=> sendemail()} className="w-[350px] h-[50px] bg-blue-500 rounded-2xl hover:bg-blue-700">Send</button>
              </div>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AdbyUser;
