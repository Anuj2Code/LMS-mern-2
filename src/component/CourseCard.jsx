import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({product,loading}) => {
  return (
    <>
    {loading ?<div className="flex flex-col h-[300px] gap-4 w-96 relative  bg-[#181a1b] left-[65px] rounded-3xl">
  <div className="skeleton h-32 w-full mb-[10px] rounded-t-3xl"></div>
  <div className="skeleton h-4 w-28 mt-[10px]"></div>
  <div className="skeleton h-4 w-full mt-[10px]"></div>
  <div className="skeleton h-4 w-full mt-[10px]"></div>
</div>:
 <Link to={`/detail/${product._id}`}>
 <div className="card card-compact w-[350px] h-[420px] shadow-xl bg-[#181a1b] relative left-[80px] rounded-3xl" >
 <figure><img src={product.thumbnail.secure_url} alt="Shoes" className='h-[320px]'/></figure>
 <div className=" card-body">
   <h2 className="card-title "></h2>
   <p className='text-[25px] text-[#e8e6e3] font-semibold'>{product.title}</p>
   <p className='text-[18px] leading-7'>{product.description}</p>
   <div className="card-actions justify-between">
     <div className='text-[20px] text-[#6e96cf] font-semibold'>₹ {product.price}</div>
     <div className='text-[20px]'>60% <span> off</span></div>
     <div></div>
   </div>
 </div>
</div>
 </Link>
 }
    </>
  )
}

export default CourseCard
