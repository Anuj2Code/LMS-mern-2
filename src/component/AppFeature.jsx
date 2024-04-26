import React,{useEffect} from 'react'
import ion from '../Images/intro - Copy.webp'
import vid from '../Images/Iso room LEVEL UP ANIMATION g n0001-0240_7xCLfz6xF.webm'
import vid1 from '../Images/115021-703067702_small.mp4'
import vid2 from '../Images/Iso room gif material animation0001-0240-2_ql4eQodtV.webm'
import vid3 from '../Images/61037-497754241_small.mp4'
import AOS from "aos";
import "aos/dist/aos.css";

const AppFeature = () => {
   useEffect(() => {
      AOS.init({
        duration: 2000,
        offset: 400,
        easing: "ease",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    }, []);

  return (
    <>
      <div className='min-h-[100vh] w-[100vw] bg-[#ececec] flex flex-col gap-20'>
         <div className='flex  w-[100%] justify-center items-center gap-5 mt-[55px]'>
            <h1 className='text-[#10a37f] text-[60px] font-semibold drop-shadow-4xl'>Our</h1>
            <img src={ion} alt="" className='h-[180px] w-[180px]' />
            <h1 className='text-[#10a37f] text-[60px] font-semibold drop-shadow-4xl'>Feautres</h1>
         </div>
         <div className='flex justify-around w-[100%] max-[593px]:flex-col max-[593px]:justify-center max-[593px]:items-center max-[593px]:gap-4'>
            <div className='w-[50%] flex flex-col gap-4 '>
          <div className='flex gap-3'>
          <h1 className='text-[30px] font-bold leading-8 text-black drop-shadow-xl max-[593px]:text-[25px]'>We Provide Multiple Courses with Top Notch Content with High-quality video Sessions</h1>
          </div>
               <div>
               <p className='text-[23px] text-[#10a37f] leading-7 font-medium max-[593px]:text-[18px]' >Get new video content every week along with resources and problems. Join Weekly Interactive LIVE Sessions on our dedicated HD LIVE video platform and ask your doubts directly in the LIVE classes.</p>
               </div>
            </div>
            <div>
                <video src={vid} data-aos="fade-left" loop muted autoPlay controls = '' className='w-[250px] h-[250px] rounded-2xl shadow-lg shadow-slate-500'></video>
            </div>
         </div>
         <div className='flex justify-around w-[100%] max-[593px]:flex-col-reverse max-[593px]:justify-center max-[593px]:items-center max-[593px]:gap-4'>
         <div>
                <video src={vid1} loop muted autoPlay controls = '' data-aos="fade-right" className='w-[350px] h-[330px] relative bottom-10'></video>
            </div>
            <div className='w-[50%] flex flex-col gap-4 '>
          <div className='flex gap-3'>
             <h1 className='text-[30px] font-bold leading-8 text-black drop-shadow-xl  max-[593px]:text-[25px]'>We Provide E-Books and as well as Old Books , You can sell your Own books at your own price </h1>
          </div>
               <div>
               <p className='text-[23px] text-[#10a37f] leading-7 font-medium  max-[593px]:text-[18px]' >Buy And Sell Used Books Online In India. Buy second hand books and old books near you. Post free ads to sell books online in India.</p>
               </div>
            </div>
         </div>
         <div className='flex justify-around w-[100%] max-[593px]:flex-col max-[593px]:justify-center max-[593px]:items-center max-[593px]:gap-4'>
            <div className='w-[50%] flex flex-col gap-4 '>
          <div className='flex gap-3'> <h1 className='text-[30px] font-bold leading-8 text-black drop-shadow-xl  max-[593px]:text-[25px] '>We Provide Recent News so that student are well aware about the world</h1>
          </div>
               <div>
               <p className='text-[23px] text-[#10a37f] leading-7 font-medium  max-[593px]:text-[20px]' >Get the recent News Headlines ,breaking news, and current affairs  with their source. </p>
               </div>
            </div>
            <div>
                <video src={vid2}  data-aos="fade-left" loop muted autoPlay controls = '' className='w-[300px] h-[300px] rounded-2xl shadow-lg shadow-slate-500'></video>
            </div>
         </div>
         <div className='flex justify-around w-[100%] max-[593px]:flex-col-reverse max-[593px]:justify-center max-[593px]:items-center max-[593px]:gap-4'>
         <div>
                <video src={vid3} loop muted autoPlay controls = '' className='w-[350px] h-[330px] relative bottom-10' data-aos="fade-right"></video>
            </div>
            <div className='w-[50%] flex flex-col gap-4 '>
          <div className='flex gap-3'> <h1 className='text-[30px] font-bold leading-8 text-black drop-shadow-xl max-[593px]:text-[25px] '>We Provide Google gemini like Feature in our website. </h1>
          </div>
               <div>
               <p className='text-[23px] text-[#10a37f] leading-7 font-medium max-[593px]:text-[20px]' >You can ask your doubt and get detail response to your query</p>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default AppFeature
