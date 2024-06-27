import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {CreateOr} from '../Actions/Order'

const Payment = () => {
 const location = useLocation();
 const obj = location.state;
 console.log(obj);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const payBtn = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));
  let  id  = '';
  if(user){
    id = user.data._id
  }
  else{
    id=null
  }
  const stripe = useStripe();
  const elements = useElements();

  const paymentData = {
    amount: Math.round(obj.totalPrice * 100),
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    payBtn.current.disabled = true;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://lms-mern-3.onrender.com/api/payment/payment/process",
        paymentData,
        config
      );
      const client_secret = data.client_secret;
      console.log(client_secret);
      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.data.username,
            email: user.data.email,
          },
        },
      });
      if (result.error) {
        payBtn.current.disabled = false;
        toast.error(result.error.message);
      } 
      else {
        if (result.paymentIntent.status === "succeeded") {
          obj.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          console.log(obj);
          dispatch(CreateOr(obj,id))
          Navigate("/mycourses");
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
        console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
    <ToastContainer />
    <div className="mt-[1px] bg-red-200 z-0 h-[0px]">
     <h1 className="w-[100%] text-[30px] relative top-[15px] font-medium text-green-500  text-center">Test Mode</h1>
    </div>
    <div className="h-[100vh] flex justify-center items-center  ">
      <form action="" className=" bg-[#202329] rounded-2xl shadow-lg shadow-blue-500/30 w-[30%] h-[70%]" onSubmit={(e) => submitHandler(e)}>
        <h1 className="text-[35px] font-bold drop-shadow min-[980px]:h-[130px] text-center max-[607px]:mb-[35px] uppercase mt-[25px]">
          Card Details
        </h1>
      <div className="ml-[35px] flex flex-col justify-center items-center">
      <div className="flex mb-[30px] gap-4 ">
          <CardNumberElement className="paymentInput w-[280px] p-[10px] h-[35px] bg-[#701c2a]  rounded-lg" />
        </div>
        <div className="flex mb-[30px] gap-4  ">
          <CardExpiryElement className="paymentInput w-[280px] p-[10px] h-[35px] bg-[#701c2a] rounded-lg" />
        </div>
        <div className="flex  mb-[30px] gap-4 ">
          <CardCvcElement className="paymentInput w-[280px] p-[10px] h-[35px] bg-[#701c2a]  rounded-lg" />
        </div>
      </div>
       <div className="w-[100%] flex justify-center max-[607px]:ml-[10px] relative top-[50px]">
       <input
          type="submit"
          className="min-[950px]:h-[50px] min-[950px]:ml-[12px] cursor-pointer min-[950px]:w-[300px] bg-red-800 hover:bg-red-500 text-white rounded-3xl min-[950px]:mt-[25px] max-[948px]:w-[33vw] max-[948px]:h-[39px]"
          value={`Pay   ₹ ${obj.totalPrice}`}
          ref={payBtn}
        />
       </div>
      </form>
    </div>
  </>
  )
}

export default Payment
