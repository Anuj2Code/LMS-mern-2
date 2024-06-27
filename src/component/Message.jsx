import React from 'react'

const Message = ({message,user}) => {
    if (user) {
        return (
            <div className='min-h-[30px] w-[35%] bg-[#214274] text-balance pl-[6px] m-[15px] rounded-md ' style={{overflowWrap:'break-word'}}>
           <p className='text-[#47dd51]' >{user}: <span className='text-[white]'>{message}</span> </p>
          </div>
        )
    }
    else{
        return (
            <div className='min-h-[30px] w-[35%] bg-[#214274] text-balance pl-[6px]  m-[15px] rounded-md relative left-[455px] ' style={{overflowWrap:'break-word'}}>
             <p className='text-[#47dd51]' >You : <span className='text-[white]'>{message}</span> </p>
          </div>
        )  
    }
}

export default Message
