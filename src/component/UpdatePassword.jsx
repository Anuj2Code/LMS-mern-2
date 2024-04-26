import React ,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {updatePassword} from '../Actions/Auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UPDATE_PASSWORD_RESET } from '../constants/Auth'
import Footer from './Footer';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const user1 = JSON.parse(localStorage.getItem('user'));
    const id = user1.data._id;
    const { isUpdated} = useSelector((state)=> state.update)
    const updatePasswordSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("oldPassword",oldPassword );
        myForm.set("newpassword",newPassword);
        myForm.set("confirmPassword",confirmPassword)
        dispatch(updatePassword(myForm,id));
      };
      if(isUpdated){
        toast.success('Password updated !')
     }
  return (
   <>
    <ToastContainer theme="dark"/>
    <div className="w-[100vw] flex justify-center h-[89px] max-[777px]:mt-[15px] ">
        <h1 className="text-[38px] font-semibold mt-[25px] mb-4  w-[300px] min-[778px]:h-[80px] text-center text-blue-600 min-[950px]:ml-[25px]">
          Edit Password
        </h1>
      </div>
      <div className="h-[95vh] w-[100vw] flex justify-center items-center flex-col max-[1030px]:h-[110vh]">
        <div className="w-[550px] h-[90%] border border-blue-500 shadow-xl shadow-blue-500/30 rounded-3xl max-[1030px]:h-[95%]">
          <div className="flex justify-center items-center  h-[60%] mt-[52px]  ">
                <form action="" encType="multipart/form-data" onSubmit={updatePasswordSubmit}  >
                   <div className='flex flex-col gap-[50px] mt-[150px]'>
                   <div>
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">Old Password</h1>
                    <input
                      type="text"
                      placeholder="Enter your old password ..."
                      name="username"
                      className="h-[40px] w-[350px] rounded-2xl border-1 border-black text-center mb-[20px] "
                      onChange={(e)=> setOldPassword(e.target.value)}
                      value={oldPassword} />
                  </div>
                  <div className="max-[948px]:mt-[41px]">
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">New Password</h1>
                    <input
                      type="text"
                      placeholder="Enter the new password ..."
                      name="email"
                      className="h-[40px] w-[350px] rounded-2xl border-1 border-black text-center mb-[20px] "
                      onChange={(e)=> setNewPassword(e.target.value)}
                      value={newPassword}
                    />
                  </div>
                  <div className="max-[948px]:mt-[41px]">
                    <h1 className="text-[25px] mb-[15px] max-[948px]:text-center">Confirm Password</h1>
                    <input
                      type="text"
                      placeholder="Enter the confirm password ..."
                      name="email"
                      className="h-[40px] w-[350px] rounded-2xl border-1 border-black text-center mb-[20px] "
                      onChange={(e)=> setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </div>
                   </div>
                  <div className="w-[100%] justify-center flex max-[948px]:relative max-[948px]:top-[40px]">
                  <button type='submit' className='min-[950px]:h-[50px] max-[550px]:w-[90%] min-[950px]:w-[300px] bg-blue-600 hover:bg-blue-500 text-white rounded-3xl min-[950px]:mt-[80px] max-[948px]:w-[33vw] max-[948px]:h-[39px]'
                  >Update It </button>
                  </div>
                </form>
              </div>
        </div>
      
      </div>
      <Footer/>
   </>
  )
}

export default UpdatePassword