import React,{useState,useRef, useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {upload} from '../Actions/Books'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UPLOAD_BOOKS_DEATILS_REST} from '../constants/Books'
import Footer from "./Footer";

const SellABook = () => {
    const dispatch = useDispatch();
    const inputRef=  useRef(null);
    const [title,settitle] = useState('');
    const [descr,setdescr] = useState('');
    const [name,setname] = useState('');
    const [city,setcity] = useState('');
    const [mobile,setmob] = useState(0);
    const [prtype,setprtype] = useState('');
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("./png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png");
    const [item,setitem] = useState('');
    const [auth,setauth] = useState('');
    const [mrp,setmrp] = useState(0);
    const [np,setnp]= useState(0);
    const [ad,setad] = useState('');
    const [price,setprice] = useState(0);
    const [ed,seted] = useState('')
    const {sub,error} = useSelector((state)=> state.up);

    const user = JSON.parse(localStorage.getItem("user"));
    let id= "";
    if (!user) {
      id = null;
    } else {
      id = user.data._id;
    }
    
    const changeImage =()=>{
        inputRef.current.click()
       }

       const uploadsub = () => {
        const myForm = new FormData();
        myForm.set("title", title);
        myForm.set("description",descr);
        myForm.set("priceType",prtype);
        myForm.set("price",price);
        myForm.set("itemCondition",item);
        myForm.set("author",auth);
        myForm.set("mrp",mrp);
        myForm.set("edition",ed);
        myForm.set("noOfPage",np);
        myForm.set("adDescription",ad);
        myForm.set("city",city);
        myForm.set("uname",name);
        myForm.set("num",mobile);
        myForm.set("booksimage",avatar);
        dispatch(upload(myForm,id));
        dispatch({ type: UPLOAD_BOOKS_DEATILS_REST });
      }
 
      if(sub){
        toast.success('AD Posted successfull')
      } 
      useEffect(()=>{
        if(error){
          toast.error(error)
         }
      },[error])
      
      useEffect(()=>{
        toast.info('All the field are required')
      },[])
      
       const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
          const reader = new FileReader();
      
          reader.onload = () => {
            if (reader.readyState === 2) {
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
            }
          };
          reader.readAsDataURL(e.target.files[0]);
        } 
      };
      
  return (
    <>
      <h1 className="w-[100%] font-bold text-center h-[100px] text-blue-500 text-[40px] mt-[15px]">
        Post AD
      </h1>
      <ToastContainer theme="dark" style={{fontSize:'20px'}}/>
      <div className="flex justify-center items-center min-h-[100vh] w-[100vw]">
        <div className="w-[50%] border border-blue-500 rounded-2xl min-h-[100vh] flex flex-col justify-center items-center shadow-xl shadow-blue-600/80">
          <form  encType="multipart/form-data" className="w-[100%] flex flex-col gap-[40px]">
            <div className="flex flex-col ml-[55px] mt-[15px]">
              <h1 className="text-[28px]">Title </h1>
              <input type="text" className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder="Write a title ..." value={title} onChange={(e)=> settitle(e.target.value) } />
            </div>
            <div className="flex flex-col ml-[55px]">
              <h1 className="text-[28px]">Description</h1>
              <textarea type="text"   cols="30"
              rows="30" value={descr} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder="Write a Description..." onChange={(e)=> setdescr(e.target.value)}/>
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">Name</h1>
              <input type="text" value={name} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder=" Name ..." onChange={(e)=> setname(e.target.value)} />
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">City</h1>
              <input type="text" value={city} className=" w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder=" City ..." onChange={(e)=> setcity(e.target.value)}/>
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">Mobile Number</h1>
              <input type="text" value={mobile} className=" w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder=" Mobile Number ..." onChange={(e)=> setmob(e.target.value)}/>
            </div>
            <div>
              {" "}
              <h1 className="text-[28px] ml-[55px]">Price type</h1>
              <select className="select select-ghost w-full max-w-xs ml-[55px]" value={prtype} onChange={(e)=> setprtype(e.target.value)}>
                <option >
                Select option
                </option>
                <option>Fixed</option>
                <option>Negotiable </option>
                <option>Price on call</option>
              </select>
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">Item Conditon</h1>
              <input type="text" value={item} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder=" Item condition ..." onChange={(e)=> setitem(e.target.value)} />
            </div>
            <div>
            <div id="registerImage"  className="max-[948px]:flex max-[948px]:justify-center" >
               <h1 className="text-[28px] ml-[55px]">upload</h1>
               <img src={avatarPreview} onClick={changeImage}  alt="Avatar Preview"  className='max-[948px]:h-[80px] max-[948px]:w-[80px] relative min-[950px]:mt-[10px] min-[950px]:left-[192px] h-[98px] min-[1100px]:left-[200px] rounded-2xl w-[100px] max-[500px]:mt-[15px] ' />       
                  <input
                    style={{display:"none"}}
                    ref={inputRef}
                    type="file"
                    name="avatar"
                    id="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">Author</h1>
              <input type="text" value={auth} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder=" Author name ..." onChange={(e)=> setauth(e.target.value)}/>
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">MRP</h1>
              <input type="text"  value={mrp} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder="MRP ..." onChange={(e)=> setmrp(e.target.value)}/>
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">Edition</h1>
              <input type="text"  value={ed} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder="Edition ..."  onChange={(e)=> seted(e.target.value)}/>
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">No Of Pages</h1>
              <input type="text" value={np} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder="No Of Pages ..." onChange={(e)=> setnp(e.target.value)} />
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">Ad Description</h1>
              <input type="text"  value={ad} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder="AD Description ..."  onChange={(e)=> setad(e.target.value)}/>
            </div>
            <div className="flex flex-col ml-[55px]">
              {" "}
              <h1 className="text-[28px]">Your Price</h1>
              <input type="text"  value={price} className="w-[60%] bg-[#363535] h-[40px] text-[20px] mt-[10px] pl-[10px]" placeholder="Your Price ..."  onChange={(e)=> setprice(e.target.value)} />
            </div>
          </form>
         <div className="mb-[30px] mt-[30px]">
         <button type='submit' onClick={()=> uploadsub()} className='min-[950px]:h-[50px] min-[950px]:w-[350px] bg-blue-500 hover:bg-blue-600 text-white rounded-3xl  max-[948px]:w-[57vw] max-[948px]:h-[39px]'
                  >Post</button>
         </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SellABook;
