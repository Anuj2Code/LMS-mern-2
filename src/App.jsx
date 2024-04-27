import React,{useState,useEffect} from 'react'
import axios from "axios";
import Navbar from './component/Navbar'
import Home from './component/Home'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from './component/Signup'
import Profile from './component/Profile';
import Courses from './component/Courses';
import CourseDetails from './component/CourseDetails';
import CourseModule from './component/CourseModule';
import Login from './component/Login';
import Rest from './component/Rest';
import Enroll from './component/Enroll';
import Payment from './component/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyCourses from './component/MyCourses';
import Purchase from './component/Purchase';
import Gemini from './component/Gemini';
import Googles from './component/Googles';
import GiveRe from './component/GiveRe';
import Books from './component/Books';
import BookDet from './component/BookDet';
import Oldbooks from './component/Oldbooks';
import OldDetail from './component/OldDetail';
import SellABook from './component/SellABook';
import AdbyUser from './component/AdbyUser';
import MyAd from './component/MyAd';
import EditProfile from './component/EditProfile';
import UpdatePassword from './component/UpdatePassword';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Pagenot from './component/Pagenot';

const App = () => {
 let i = "";
 const user1 = JSON.parse(localStorage.getItem("user"));
 if (user1) {
   i = user1.data._id;
 } else {
   i = null;
 }

  const [stripeKey,setStripeKey] = useState("")
   const getStripeApiKey = async()=> {
    const { data } = await axios.get("https://lms-mern-3.onrender.com/api/payment/key");
    setStripeKey(data.stripeApiKey);
  }
  useEffect(()=>{
    getStripeApiKey()
  },[])

 

  return (
    <>
     <BrowserRouter>      
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/detail/:id' element={<CourseDetails/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/module/:id' element={<CourseModule/>}></Route>
      <Route path='/courses/:keyword' element={<Courses/>}></Route>
      <Route path='/log' element={<Login/>}></Route>
      <Route path='/rest' element={<Rest/>}></Route>
      <Route path='/det/:id' element={<BookDet/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<Pagenot/>}></Route>
      <Route path='/re/:id' element={<GiveRe/>}></Route>
      <Route path='/myAd' element={<MyAd/>}></Route>
      <Route path='/articles' element={<Googles/>}></Route>
      <Route path='/oldBooks' element={<Oldbooks/>}></Route>
      <Route path='/detOldBooks/:id' element={<OldDetail/>}></Route>
      <Route path='/book' element={<Books/>}></Route>
      <Route path='/enroll/:id' element={<Enroll/>}></Route>
      <Route path='/sell' element={<SellABook/>}></Route>
      <Route path='/edit' element={<EditProfile/>}></Route>
      <Route path='/updatePassword' element={<UpdatePassword/>}></Route>
      <Route path='/purchase' element={<Purchase/>}></Route>
      <Route path='/adByUser' element={<AdbyUser/>}></Route>
      <Route path='/mycourses' element={<MyCourses/>}></Route>
      <Route path='/askAI' element={<Gemini/>}></Route>
      <Route path='/payment' element={stripeKey && (
        <Elements stripe={loadStripe(stripeKey)}><Payment/></Elements>
     )}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
