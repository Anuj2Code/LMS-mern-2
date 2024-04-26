import { createContext, useState } from "react";
import runChat from "../config/Gemini";
 export const Context = createContext();

 const ContextProvider =(props)=>{
    const[input,setInput] = useState("");
    const[recentPrompt,setrecentPrompt] = useState("");
    const[prevprompts,setpreprompts] = useState([]);
    const[showResult,setshowResult] = useState(false);
    const[load,setLoad] = useState(false); 
    const [resultData,setresultData] = useState("");

    const delayPara =(index,nextWord)=>{
         setTimeout(()=>{
           setresultData(pre=>pre+nextWord)
         },75*index)
    }
    const onSent = async(prompt)=>{
        setresultData("");
        setLoad(true);
        setshowResult(true);
        setrecentPrompt(input);
      const res =  await runChat(input);
      let responseArray = res.split("*");
      let newResponse;
      for (let i = 0; i < responseArray.length; i++) {
        if(i===0 || i%2!==1){
            newResponse+=responseArray[i];
        }else{
            newResponse+="<b>"+responseArray[i]+"</b>"
        }
      }
      let newRes = newResponse.split("*").join("</br>");
      let ResArray =newRes.split(" ");
      for (let i = 0; i < ResArray.length; i++) {
       const nextWord = ResArray[i];
       delayPara(i,nextWord+" ");
      }
      setLoad(false);
      setInput('');
    }
   
    const contextValue={
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
    }
    return (
       <Context.Provider value={contextValue}>
          {props.children}
       </Context.Provider>
    )
 }

 export default ContextProvider