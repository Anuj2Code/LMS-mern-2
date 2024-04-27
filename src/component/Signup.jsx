import React,{useState,useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import Tilt from 'react-parallax-tilt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import {register} from  '../Actions/Auth'
import {REGISTER_RESET} from '../constants/Auth'
import Footer from './Footer';
const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { error, loading,isAuthenticated} = useSelector((state)=> state.login);
  console.log(error);
  const inputRef=  useRef(null)
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("./png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png");
  const [user,setUser] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
   });

   const {username,email,password,confirmPassword} = user
   console.log(user);

   const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("avatar", avatar);
    myForm.set("username",username);
    myForm.set("password",password);
    myForm.set("confirmPassword",confirmPassword);
    myForm.set("email",email);
    dispatch(register(myForm));
  }

    if(isAuthenticated===true ){
      toast.success('successfull register')
    setTimeout(()=>{
      navigate('/profile')
    },3000)
    dispatch({
      type: REGISTER_RESET,
    });
     }
  const user1 = localStorage.getItem('user')
  console.log(user1);
   useEffect(()=>{
     if(error){
      toast.error(error)
     }
   },[error,navigate])
   
   useEffect(()=>{
    toast.info('Profile pic selection is mandatory and size of pic is less than 450KB ...'); 
   },[])
   const changeImage =()=>{
    inputRef.current.click()
   }
const registerDataChange = (e) => {
  if (e.target.name === "avatar") {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  } else {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
};

  return (
<>
<div className="h-[122vh] flex">
      <div className="right h-[102vh] w-[50%] mt-[25px] max-[960px]:hidden max-[948px]:relative max-[948px]:top-[10px] max-[948px]:min-h-[35vh] flex flex-col justify-center items-center">
      <Tilt className="background-stripes parallax-effect" perspective={1100}>
        <div className="card w-96 bg-[#0d0d0d] shadow-xl m-[10px]  hover:shadow-blue-500/30 rounded-xl">
          <div className="card-body">
          <div className="bg-blue-500 w-[63px] h-[59px] rounded-full flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" class="w-6 h-6 fill-white"><path fill-rule="evenodd" d="M5.5 1.834a1.833 1.833 0 0 0-1.833 1.833v14.667A1.834 1.834 0 0 0 5.5 20.167h10.083a2.75 2.75 0 0 0 2.75-2.75V4.584a2.75 2.75 0 0 0-2.75-2.75zm3.667 1.833H5.5v14.667h10.083a.917.917 0 0 0 .917-.917V4.584a.917.917 0 0 0-.917-.917h-.916v8.228c0 .825-.998 1.237-1.58.654l-1.17-1.17-1.17 1.17c-.583.583-1.58.17-1.58-.654zm3.666 0H11v6.037l.262-.262a.926.926 0 0 1 1.31 0l.261.262z" clip-rule="evenodd"></path></svg>
          </div>
            <p className="text-blue-400 text-lg mt-[10px] font-semibold">Learn : Access 100 + Courses</p>
          </div>
        </div>
        </Tilt>
        <Tilt className="background-stripes parallax-effect" perspective={1100}>
        <div className="card w-96 bg-[#0d0d0d] shadow-xl m-[10px]  hover:shadow-red-300/30 rounded-xl">
          <div className="card-body">
          <div className="bg-[#ef476f] w-[63px] h-[59px] rounded-full flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" class="w-6 h-6 fill-white"><path d="M14.667 2.75c.47 0 .857.354.91.81l.006.107v.916h1.834c.966 0 1.758.748 1.828 1.697l.005.137v11c0 .966-.748 1.758-1.697 1.828l-.136.005H4.583a1.833 1.833 0 0 1-1.828-1.697l-.005-.136v-11c0-.967.748-1.759 1.697-1.829l.136-.005h1.834v-.916a.917.917 0 0 1 1.827-.107l.006.107v.916h5.5v-.916c0-.507.41-.917.917-.917m2.75 8.25H4.583v6.417h12.834zm0-4.583H4.583v2.75h12.834z"></path></svg>
          </div>
            <p className="text-[#ef476f] text-lg mt-[10px] font-semibold">Apply : Build , Play and Create</p>
          </div>
        </div> 
        </Tilt>
        <Tilt className="background-stripes parallax-effect" perspective={1100}>
        <div className="card w-96 bg-[#0d0d0d] shadow-xl m-[10px]  hover:shadow-green-300/30 rounded-xl">
          <div className="card-body">
          <div className="bg-[#23c45c] w-[63px] h-[59px] rounded-full flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" class="w-6 h-6 fill-white"><path d="m16.885 2.564.354.051c.55.087 1.166.233 1.544.612.38.38.526.995.613 1.545l.051.353c.116.834.146 1.928-.051 3.142-.389 2.395-1.664 5.252-4.866 7.466q-.022.246-.015.492l.015.498c.01.332.004.663-.088.98-.174.606-.795 1.005-1.375 1.29l-.284.135-.367.162-.25.1c-.648.248-1.43.421-1.941-.091-.232-.232-.34-.547-.426-.863l-.042-.157a16 16 0 0 0-.52-1.645 3 3 0 0 1-.181.2c-.5.498-1.177.75-1.855.944l-.45.124-.449.119-.438.11-.396.092-.474.1-.296.058a.925.925 0 0 1-1.079-1.079l.102-.505.118-.53.114-.467.206-.775c.204-.751.453-1.526 1.008-2.08l.091-.088-.7-.25-.702-.243c-.412-.136-.845-.279-1.144-.577-.546-.547-.314-1.4-.042-2.07l.152-.354.126-.276c.29-.618.703-1.33 1.36-1.518.317-.092.648-.097.98-.089l.498.017c.165.002.33 0 .492-.016 2.213-3.202 5.071-4.477 7.467-4.866a10.7 10.7 0 0 1 3.14-.05m-2.847 1.86c-2.015.328-4.463 1.407-6.374 4.28-.232.35-.623.515-1.022.578a4 4 0 0 1-.68.046l-.686-.01q-.17-.002-.342.006c-.278.37-.473.81-.618 1.247l1.375.5.565.213c1.034.406 2.035.896 2.805 1.666 1.297 1.297 1.956 2.994 2.433 4.727.418-.146.838-.334 1.194-.6l.005-.342-.01-.684c0-.227.01-.455.046-.682.062-.399.229-.79.577-1.022 2.874-1.91 3.953-4.359 4.28-6.374a8.9 8.9 0 0 0 .045-2.597 5 5 0 0 0-.177-.82 5 5 0 0 0-.82-.176 8.9 8.9 0 0 0-2.596.045m-7.575 9.817c-.321.387-.47.896-.59 1.4l-.1.43-.05.206.636-.149c.504-.12 1.014-.27 1.4-.591a.917.917 0 1 0-1.296-1.296m5.185-6.481a1.833 1.833 0 1 1 2.593 2.594 1.833 1.833 0 0 1-2.593-2.595"></path></svg>
          </div>
            <p className="text-[#23c45c] text-lg mt-[10px] font-semibold">Glow : Elevate your Career</p>
          </div>
        </div>
        </Tilt>
      </div>
      <div className="left w-[50%] flex justify-center mt-[50px] max-[948px]:h-[100vh] max-[948px]:w-[100%] max-[948px]:relative ">
            <div className="h-[110vh] hover:shadow-blue-500 w-[70%]  shadow-lg rounded-2xl flex flex-col [@media(max-width:1100px)]:w-[89%] bg-[#16171c] ">
               <h1 className="min-[950px]:text-[49px] top-2 relative w-[100%] text-center font-semibold h-[100px] min-[950px]:pt-[10px]  [@media(max-width:948px)]:text-[40px] max-[500px]:font-bold">
                Sign Up
              </h1>
              <div id="registerImage"  className="max-[948px]:flex max-[948px]:justify-center" >
                  <img src={avatarPreview} onClick={changeImage} alt="Avatar Preview"  className='max-[948px]:h-[80px] max-[948px]:w-[80px] relative min-[950px]:mt-[10px] min-[950px]:left-[192px] h-[98px] min-[1100px]:left-[200px] rounded-full w-[100px] max-[500px]:mt-[15px] ' />
                  <input
                    style={{display:"none"}}
                    ref={inputRef}
                    type="file"
                    name="avatar"
                    id="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
             <ToastContainer theme="dark"/>
              <div className="flex justify-center items-center  h-[90%] min-[950px]:mt-[12px] ">
                <form action=""   encType="multipart/form-data"
                    onSubmit={registerSubmit}
                    >
                  <div>
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">Username</h1>
                    <input
                      type="text"
                      placeholder="Enter your name ..."
                      name="username"
                      className="h-[35px] min-[950px]:w-[300px] rounded-2xl border-1 border-black text-center min-[950px]:mb-[20px] max-[948px]:w-[57vw]"
                      onChange={registerDataChange}
                      value={user.username}
                    />
                  </div>
                  <div className="max-[948px]:mt-[41px]">
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">E-mail</h1>
                    <input
                      type="email"
                      placeholder="Enter the E-mail address ..."
                      name="email"
                      className="h-[35px] min-[950px]:w-[300px] rounded-2xl border-1 border-black text-center min-[950px]:mb-[20px] max-[948px]:w-[57vw]"
                      onChange={registerDataChange}
                      value={user.email}
                    />
                  </div>
                  <div className="max-[948px]:mt-[41px]">
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">Password</h1>
                    <input
                      type="text"
                      placeholder="Enter the password..."
                      name="password"
                      className="h-[35px] min-[950px]:w-[300px] rounded-2xl border-1 border-black text-center min-[950px]:mb-[20px] max-[948px]:w-[57vw]"
                      onChange={registerDataChange}
                      value={user.password}
                    />
                  </div>
                  <div className="max-[948px]:mt-[41px]">
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">Confirm Password</h1>
                    <input
                      type="text"
                      placeholder="Enter the password ..."
                      name="confirmPassword"
                      className="h-[35px] min-[950px]:w-[300px] rounded-2xl border-1 border-black text-center min-[950px]:mb-[20px] max-[948px]:w-[57vw]"
                      onChange={registerDataChange}
                      value={user.confirmPassword}
                    />
                  </div>
                  <div className="h-[30px]  w-[100%] text-center text-[23px] ">
                  </div>
                  <div className="w-[100%] justify-center flex max-[948px]:relative ">
                  <button type='submit'  className='min-[950px]:h-[50px] min-[950px]:w-[300px] bg-blue-500 text-white rounded-3xl  max-[948px]:w-[57vw] max-[948px]:h-[39px]'
                  >Create Account</button>
                  </div>
                  <div className=" w-[100%] text-center h-[10%] pt-[20px]  min-[950px]:text-[18px] cursor-pointer text-red-500">
                <Link to={'/log'}>
                <div>
                 <span className="text-blue-500 hover:underline">Already have a Account ?</span>
                 </div></Link>
              </div>
                </form>
              </div>
            </div>
          </div>
    </div>
    <Footer/>
</>
  );
};

export default Signup;
