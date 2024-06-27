import React from 'react'
import io from '../Images/blue-fire-png.webp'

const Poster = () => {
  return (
    <>
    <div className='flex  w-[100vw] max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-center '>
        <div className='h-[100%] w-[50%] flex flex-col justify-center items-center gap-12 pb-[50px]'>
            <div className=' w-[50%]'>
            <img src={io} alt="" className='h-[70px] w-[50px] hidden '/>
            </div>
            <div style={{fontFamily:'Lobster'}} >
                <h1 className='text-[35px]  text-[#ffffff]'>Start Your Journey now, </h1>
                <h1 className='text-[35px]  text-[#ffffff]'>level up your</h1>
                <h1 className='text-[35px]  text-[#ffffff]'>Skills .</h1>
                <a href="mailto:tanujpal2004@gmail.com" className="link link-hover text-[24px] text-[#8d46de] hover:text-blue-500">tanujpal2004@gmail.com</a>
            </div>
        </div>
        <div className='flex h-[100%] w-[50%] justify-center items-center pb-[50px] max-[900px]:w-[100%]'>
        <p className='w-[70%] text-[40px] font-bold mt-[30px] text-[#5eb0d6] ' style={{fontFamily:'Jacquard-24'}}>
            Talent is cheaper than the salt ,what separates a talented individual from the successful one is a lot of hard work.
        </p>
        </div>
    </div>
    </>
  )
}

export default Poster
