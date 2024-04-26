import React,{useState, useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {contact} from  '../Actions/Auth'
import {CONTACT_USERS_REST} from '../constants/Auth'
import Footer from "./Footer";

const Contact = () => {
    const dispatch = useDispatch();
    const [email,setemail] = useState("");
    const [username,setusername] = useState("");
    const [num,setnum] = useState("");
    const [comment,setcomment]= useState("");
  
     const {ok,error} = useSelector((state)=> state.contact);

    const Submit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);
        myForm.set("username",username);
        myForm.set("comment",comment);
        myForm.set("Phone",num);
        dispatch(contact(myForm));
        setemail("");
        setusername("");
        setnum("");
        setcomment("");
        dispatch({type: CONTACT_USERS_REST});
      }
 useEffect(()=>{
    if(error){
        toast.error(error.message)
    }
 },[error])

    if(ok){
        toast.success('Message send successfully')
    }
  return (
   <>
      <ToastContainer theme="dark"/>
     <h1 className='w-[100%] text-center text-[45px] text-blue-500 drop-shadow-2xl font-semibold mt-[20px] max-[350px]:text-[30px]'>Contact Us</h1>
    <div className='h-[100vh] w-[100vw]  flex justify-center mt-[15px]' >
    <form  encType="multipart/form-data">
      <div className='min-h-[80vh] w-[750px] border border-blue-500  flex flex-col  items-center gap-14 pt-[50px] rounded-3xl shadow-lg shadow-blue-500/40'>
       <div className='flex flex-col gap-3'>
            <h1 className='text-[25px] text-blue-500'>Enter your name</h1>
            <input type="text"  className='max-[552px]:w-[90vw] w-[450px] h-[40px] bg-[#39d3e8] text-black rounded-xl text-[20px]' value={username} onChange={(e)=> setusername(e.target.value)}/>
         </div>
         <div className='flex flex-col gap-3'>
            <h1 className='text-[25px] text-blue-500'>Enter your Phone_no</h1>
            <input type="text" className='max-[552px]:w-[90vw] w-[450px] h-[40px] bg-[#39d3e8] text-black pl-[10px] rounded-xl text-[20px]' value={num} onChange={(e)=> setnum(e.target.value)}/>
         </div>
         <div className='flex flex-col gap-3'>
            <h1 className='text-[25px] text-blue-500'>Enter your Email_ID</h1>
            <input type="email"  className='max-[552px]:w-[90vw] w-[450px] h-[40px] bg-[#39d3e8] text-black rounded-xl text-[20px]' value={email} onChange={(e)=> setemail(e.target.value)}/>
         </div>
         <div className='flex flex-col gap-3'>
            <h1 className='text-[25px] text-blue-500'>Comment</h1>
            <textarea type="text"  className='max-[552px]:w-[90vw] w-[450px] h-[40px] bg-[#39d3e8] text-black rounded-xl text-[20px]' value={comment} onChange={(e)=> setcomment(e.target.value)}/>
         </div>
         <div className='w-[100%] flex justify-center'>
         <button type="submit" className="btn  btn-success w-[250px] h-[30px] rounded-xl mb-[20px]"  onClick={(e)=> Submit(e)}>Send</button>
         </div>
      </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
