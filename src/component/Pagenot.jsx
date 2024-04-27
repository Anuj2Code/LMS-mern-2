import React from 'react'
import {useNavigate} from 'react-router-dom'
import pg from '../Images/funny-error-404-background-design_1167-219.avif'

const Pagenot = () => {
    const navigate = useNavigate();
  return (
      <div className='min-h-[100vh] w-[100vw]'>
        <div className='w-[100vw] flex justify-center mt-[120px]'>
        <img src={pg} alt="" className='h-[250px] w-[250px]' />
        </div>
        <div>
            <h1 className='text-[45px] text-blue-500 w-[100vw] text-center font-semibold'>404 Page Not Found</h1>
        </div>
        <div className='w-[100vw] flex justify-center mt-[30px]' onClick={()=> navigate(-1)}>
            <button className='w-[250px] h-[50px] hover:bg-blue-600 rounded-2xl hover:text-white  text-blue-500 border border-blue-500'>Go Back</button>
        </div>
      </div>
  )
}

export default Pagenot
