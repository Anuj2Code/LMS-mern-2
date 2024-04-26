import React, { useState, useRef, useEffect } from "react";
import {updateProfile} from '../Actions/Auth'
import {useDispatch,useSelector} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UPDATE_PROFILE_RESET } from '../constants/Auth'
import Footer from "./Footer";

const EditProfile = () => {
    const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.data._id;
  const im = user.data.avatar.url;
  const imge = im.split('/');
  const last = imge[imge.length-1];
  const imgId = last.split('.')[0];
  const inputRef = useRef(null);
  const [image, setimage] = useState(" ");
  const [imagePreview, setimagePreview] = useState(im);
  const [username, setUserName] = useState(user.data.username);
  const [email, setEmail] = useState(user.data.email);
 const { isUpdated} = useSelector((state)=> state.update)
  const updateProfileSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("image", image);
    myForm.set("username",username);
    myForm.set("email",email)
    dispatch(updateProfile(myForm,id,imgId));
    dispatch({
      type: UPDATE_PROFILE_RESET,
    });
  };

  const changeImage = () => {
    inputRef.current.click();
  };
  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setimagePreview(reader.result);
        setimage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  if(isUpdated){
     toast.success('Profile updated !')
  }

  return (
    <>
        <ToastContainer theme="dark"/>
      <div className="w-[100vw] flex justify-center h-[89px] max-[777px]:mt-[15px] ">
        <h1 className="text-[38px] font-semibold mt-[25px] mb-4  w-[300px] min-[778px]:h-[80px] text-center text-blue-600 min-[950px]:ml-[25px]">
          Edit Profile
        </h1>
      </div>
      <div className="h-[95vh] w-[100vw] flex justify-center items-center flex-col max-[1030px]:h-[110vh]">
        <div className="w-[550px] h-[90%] border border-blue-500 shadow-xl shadow-blue-500/30 rounded-3xl max-[1030px]:h-[95%]">
          <div id="registerImage" className="flex justify-center  items-center mt-[60px]"
          >
         <div>
         <img
              src={imagePreview}
              alt="Avatar Preview"
              onClick={changeImage}
              className="h-[150px] w-[150px]  mt-[10px]   rounded-full "
            />
            <input
              style={{ display: "none" }}
              ref={inputRef}
              type="file"
              name="avatar"
              id="avatar"
              accept="image/*"
              onChange={updateProfileDataChange}
            />
         </div>
          </div>
          <div className="flex justify-center items-center  h-[60%] mt-[52px]  ">
                <form action="" encType="multipart/form-data"
              onSubmit={updateProfileSubmit}
              >
                  <div>
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">Username</h1>
                    <input
                      type="text"
                      placeholder="Enter your name ..."
                      name="username"
                      className="h-[35px] w-[300px] rounded-2xl border-1 border-black text-center mb-[20px] "
                      onChange={(e)=> setUserName(e.target.value)}
                      value={username}
                    />
                  </div>
                  <div className="max-[948px]:mt-[41px]">
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">E-mail</h1>
                    <input
                      type="email"
                      placeholder="Enter the E-mail address ..."
                      name="email"
                      className="h-[35px] w-[300px] rounded-2xl border-1 border-black text-center mb-[20px] "
                      onChange={(e)=>setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="w-[100%] justify-center flex max-[948px]:relative max-[948px]:top-[40px]">
                  <button type='submit' className='min-[950px]:h-[50px] max-[550px]:w-[90%] min-[950px]:w-[300px] bg-blue-600 hover:bg-blue-500 text-white rounded-3xl min-[950px]:mt-[25px] max-[948px]:w-[33vw] max-[948px]:h-[39px]'
                  >Update It </button>
                  </div>
                </form>
              </div>
        </div>
      
      </div>
      <Footer/>
    </>
  );
};

export default EditProfile;
