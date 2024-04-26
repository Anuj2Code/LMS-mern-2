import React, { useContext } from 'react'
import { Context } from '../context/Context' 
import code from '../Images/code.jpeg'
import './Cont.css'

const Gemini = () => {
  const{  
    prevprompts,
    onSent,
    setpreprompts,
    setrecentPrompt,
    recentPrompt,
    showResult,
    load,
    resultData,
    input,
    setInput
} = useContext(Context);
  const user = JSON.parse(localStorage.getItem("user"));
  let id = "";
  if (user) {
    id = user.data.username;
  } else {
    id = null;
  }
  return (
    <>
      <h1 className="text-[35px] font-semibold text-blue-500 ml-[35px] relative top-4">
        Gemini
      </h1>
      <div className="min-h-[110vh]"> 
      {!showResult ?<>
        <div className="flex flex-col justify-center items-center h-[40vh] ">
          <h1 className="text-[50px] text-[#9474cf] font-medium max-[625px]:text-[35px] max-[444px]:text-[25px]">
            Hello, <span className="text-[#d96570] font-bold">{id}.</span>
          </h1>
          <h2 className="text-[50px] text-[#00ADB5] font-semibold max-[625px]:text-[35px] max-[444px]:text-[25px]">
            How can I help you today ?
          </h2>
        </div>
        <div className="flex gap-[15px] justify-center">
          <div className="card w-80 bg-[#1e1f20] shadow-xl h-[250px]  rounded-3xl">
            <div className="card-body">
              <p className="text-[24px]">Tell me about Reactjs ?</p>
              <div className="flex justify-end"><img src={code} className="rounded-full h-[40px] w-[40px]" alt="" /></div>
            </div>
          </div>
          <div className="card w-80 bg-[#1e1f20] shadow-xl h-[250px] rounded-3xl max-[410px]:hidden">
            <div className="card-body">
              <p className="text-[24px]">Tell me about Express ?</p>
              <div className="flex justify-end"><img src={code} className="rounded-full h-[40px] w-[40px]" alt="" /></div>
            </div>
          </div>
          <div className="card w-80 bg-[#1e1f20] shadow-xl h-[250px] rounded-3xl max-[604px]:hidden">
            <div className="card-body">
              <p className="text-[24px]">Tell me about Mongo ?</p>
              <div className="flex justify-end"><img src={code} className="rounded-full h-[40px] w-[40px]" alt="" /></div>
            </div>
          </div>
          <div className="card w-80 bg-[#1e1f20] shadow-xl h-[250px] rounded-3xl max-[729px]:hidden">
            <div className="card-body">
              <p className="text-[24px]">Tell me about Nodejs ?</p>
              <div className="flex justify-end"><img src={code} className="rounded-full h-[40px] w-[40px]" alt="" /></div>
            </div>
          </div>
        </div>
      </>:<div className='min-h-[50vh]'>
            <h1 className=' h-[59px] w-[100%] text-center text-[36px] font-medium text-[#f44d9b]'>{recentPrompt} ...</h1>
            {
                load?
                <div className='loader w-[100%] justify-center items-center mt-[50px]'>
                   <div className='w-[80%]'> <hr /></div>
                   <div className='w-[80%]'> <hr /></div>
                   <div className='w-[80%]'> <hr /></div>
                </div>:
                <div className='flex justify-center leading-relaxed max-[650px]:mt-[20px]'>
                  <p className='text-white w-[80%] mt-[15px]' dangerouslySetInnerHTML={{__html:resultData}}></p>
                </div>
            }
            </div>}
        <div className="mt-[80px] flex flex-col justify-center items-center gap-4 ">
           <div> 
            <input type="text" placeholder="Enter a Prompt Here..." className=" max-[399px]:w-[60vw] w-[60vw] h-[50px] rounded-l-2xl  pl-[15px] outline-none" onChange={(e)=> setInput(e.target.value)} value={input} />
            <button className='bg-blue-900 w-[150px] h-[50px] rounded-r-2xl max-[399px]:w-[20vw] '  onClick={()=> onSent()}>Search</button>
           </div>
           <p>Gemini may display inaccurate info,including about people,so double check its response.</p>
        </div>
      </div>
    </>
  );
};

export default Gemini;
