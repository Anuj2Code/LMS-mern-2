import React ,{useEffect}from 'react'
import { useSelector, useDispatch } from "react-redux";
import {myOrder} from '../Actions/Order'
import Footer from './Footer';

const Purchase = () => {
    const dispatch = useDispatch();
    const {orders,loading}  = useSelector((state)=> state.myorder)
    const user = JSON.parse(localStorage.getItem("user"));
    let  id  = '';
    if(user){
      id = user.data._id
    }
    else{
      id=null
    }

   useEffect(()=>{
       dispatch(myOrder(id))
   },[dispatch]);
   
  return (
    <>
      <div className='w-[100vw] min-h-[100vh]'>
      <table className='w-[100%] mt-[35px] '>
          <tr className='text-blue-700 text-[18px] font-medium'>
             <th>DATE</th>
             <th>TRANSACTION ID</th>
             <th>COURSE</th>
             <th>AMOUNT</th>
             <th>STATUS</th>
          </tr>
      {orders && orders.data && orders.data.map((idx)=>{
            return <tr className='w-[100%] text-center relative top-[22px] h-[50px]'>
            <td>{String(idx.createdAt).substring(0, 10)}</td>
            <td>{idx.paymentInfo.id}</td>
            <td>{idx.orderCourse.title}</td>
            <td>{idx.CoursePrice}</td>
            {idx.paymentInfo.status==='succeeded'?
             <td className='text-green-500'>{idx.paymentInfo.status}</td>:
             <td className='text-red-500'>{idx.paymentInfo.status}</td>
            }
          </tr>
       })}
      </table>
      </div>
      <Footer/>
    </>
  )
}

export default Purchase
