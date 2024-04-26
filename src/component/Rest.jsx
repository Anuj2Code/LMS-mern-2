import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { restPassword } from "../Actions/Auth";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import {RESET_PASSWORD_RESET} from '../constants/Auth'

const Rest = () => {
  const location = useLocation();
  const data = location.state;
  const dispatch = useDispatch();
  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");
  const [otp, Setotp] = useState("");
const {error,loading,ok,message} = useSelector((state)=> state.for)

  const restSubmit = (e) => {
    e.preventDefault()
    const myForm = new FormData();
    myForm.set("email", data);
    myForm.set("password", pass);
    myForm.set("confirmPassword", conf);
    myForm.set("otp", otp);
    dispatch(restPassword(myForm));
    dispatch({
      type: RESET_PASSWORD_RESET,
    });
  };
 
  useEffect(()=>{
    if(error){
        toast.error(error)
    }
 },[error])

  if(ok){
    toast.success('Password has reset successfully')
}
  return (
    <>
      <ToastContainer theme="dark"/>
      <h1 className="w-[100%] text-center text-[38px] text-blue-500 relative top-[30px] font-semibold">Rest Password </h1>
      <div className="flex justify-center items-center h-[100vh] ">
        <div className="bg-[#16171c] max-[889px]:w-[70%] items-center w-[40%] h-[80%] flex flex-col justify-center gap-[20px] rounded-2xl hover:shadow-blue-800 shadow-lg">
          <h1 className="text-[21px] max-[525px]:text-[16px]">Enter The OTP</h1>
          <input
            type="text"
            value={otp}
            onChange={(e) => Setotp(e.target.value)}
            placeholder="Otp ..."
            className="bg-black w-[80%] rounded-xl p-[10px] h-[60px] text-[#779daa] border-[#202329] border-[1px] "
          />
          <h1 className="text-[21px] max-[525px]:text-[16px]">Enter the Password</h1>
          <input
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password ..."
            className="bg-black w-[80%] rounded-xl p-[10px] h-[60px] text-[#779daa] border-[#202329] border-[1px] "
          />
          <h1 className="text-[21px] max-[525px]:text-[16px]">Enter the Confirm Password</h1>
          <input
            type="text"
            value={conf}
            onChange={(e) => setConf(e.target.value)}
            placeholder="Email ..."
            className="bg-black w-[80%] rounded-xl p-[10px] h-[60px] text-[#779daa] border-[#202329] border-[1px] "
          />
          <button
            type="submit"
            className="btn bg-blue-950 rounded-2xl hover:bg-blue-600 mr-[20px] w-[25%] max-[525px]:w-[50%]"
            onClick={(e) => restSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Rest;
