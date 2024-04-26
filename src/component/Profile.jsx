import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Profile = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  
  return (
   <>
    <div className='w-[100vw] flex justify-center h-[89px] max-[777px]:mt-[15px] '>
    <h1 className='text-[38px] font-semibold mt-[25px] mb-4  w-[300px] min-[778px]:h-[80px] text-center text-blue-600 min-[950px]:ml-[25px]'>Account Center</h1></div>
    <div className='h-[110vh] w-[100%] text-center  max-[778px]:h-[150vh] max-[777px]:mb-[15px]'>
    <div className='w-[100%] pt-4 flex gap-5 h-[100%]'>
     <div className='flex w-[100%] justify-around max-[778px]:flex-col'>
     <div className='ml-[25px] min-[778px]:mt-[160px] max-[777px]:flex-col max-[777px]:flex max-[777px]:justify-center max-[777px]:items-center'>
        <img src={user.data.avatar.url} alt="" className='min-[950px]:h-[362px] min-[950px]:w-[348px] rounded-full max-[948px]:w-[300px] max-[500px]:h-[150px] max-[500px]:w-[150px] '  />
       <Link to={'/edit'}>
       <button className='w-[220px] rounded-2xl text-xl h-[50px] bg-blue-600 hover:bg-blue-500 mt-14 text-white max-[777px]:mb-[20px]'>Edit Profile</button>
       </Link>
      </div>
      <div className='w-[40%] h-[90%] shadow-blue-500/80 rounded-3xl flex flex-col items-center justify-evenly border-blue-500 border-2 shadow-lg  ml-[5px] max-[778px]:relative [@media(max-width:778px)]:left-[25px]  [@media(max-width:778px)]:w-[82%]'>
        <div>
          <h1 className='text-[35px] text-blue-500 font-bold'>UserName</h1>
          <span className='uppercase text-[18px] font-semibold'>{user.data.username}</span>
        </div>
        <div className=''>
          <h1 className='text-[35px] text-blue-500 font-bold'>Email</h1>
          <span className=' text-[18px] font-semibold'>{user.data.email}</span>
        </div>
        <div>
        <h1 className='text-[35px] text-blue-500 font-bold'>Joined At</h1>
       <span className=' text-[18px] font-semibold'> {String(user.data.createdAt).substring(0, 10)}</span>
        </div>
        <div>
          <Link to={'/updatePassword'}>
          <button className='w-[220px] rounded-2xl text-xl h-[50px] bg-blue-600 hover:bg-blue-500  text-white'>Change Password</button>
          </Link>
        </div>
      </div>
     </div>
    </div>
    </div>
    <Footer/>
   </>
  )
}

export default Profile
