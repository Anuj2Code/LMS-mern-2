import axios from "axios";

import {
  ALL_COURSE_REQUEST,
  ALL_COURSE_SUCCESS,
  ALL_COURSE_FAIL,
COURSE_DETAILS_FAIL,
COURSE_DETAILS_REQUEST,
COURSE_DETAILS_SUCCESS,
NEW_REVIEW_FAIL,
NEW_REVIEW_REQUEST,
NEW_REVIEW_SUCCESS,
DELETE_REVIEW_FAIL,
DELETE_REVIEW_REQUEST,
DELETE_REVIEW_SUCCESS,
NEW_NOTES_FAIL,
NEW_NOTES_REQUEST,
NEW_NOTES_SUCCESS,
NEW_NOTES_RESET,
REVIEW_FAIL,
REVIEW_REQUEST,
REVIEW_SUCCESS,
REVIEW_RESET
} from "../constants/Cour";

export const getAllCourse =(keyword="" , currentPage = 1, category="") =>
  async (dispatch) => {
    try {
      console.log(category);
      dispatch({ type: ALL_COURSE_REQUEST });
      let link = ''
      if(keyword=="" && category==""){
         link = `https://lms-mern-3.onrender.com/api/course/allCourse?keyword=${''}&page=${currentPage}&category=${''}`
      }
        else if(keyword!="" && category==""){
            link=`https://lms-mern-3.onrender.com/api/course/allCourse?keyword=${keyword}&page=${currentPage}&category=${''}`
        }
        else if(keyword=="" && category!=""){
            link=`https://lms-mern-3.onrender.com/api/course/allCourse?keyword=${''}&page=${currentPage}&category=${category}`
        }
        else{
            link=`https://lms-mern-3.onrender.com/api/course/allCourse?keyword=${keyword}&page=${currentPage}&category=${category}`
        }
      const {data} = await axios.get(link);
      console.log(data, "hello ");
      dispatch({
        type: ALL_COURSE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_COURSE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getCourseDetails = (id)=> async(dispatch)=>{
    try {
     dispatch({type:COURSE_DETAILS_REQUEST});

     const {data} = await axios.get(`https://lms-mern-3.onrender.com/api/course/single/${id}`)
     
     dispatch({
      type:COURSE_DETAILS_SUCCESS,
      payload:data
    })
    } catch (error) {
     dispatch({
       type:COURSE_DETAILS_FAIL,
       payload: error.response.data.message,
   })
    }
   }

   export const newReview = (myForm,id, lectId, id5, id1, username, url) => async (dispatch) => {
    try {
      dispatch({ type: NEW_REVIEW_REQUEST });
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(`https://lms-mern-3.onrender.com/api/course/doubt?id2=${lectId}&id1=${id1}&url=${url}&username=${username}&id=${id}&id5=${id5}`, myForm, config);
      console.log(data);
      dispatch({
        type: NEW_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: NEW_REVIEW_FAIL,
        payload: error,
      });
    }
  };

  export const Review = (myForm,id, username) => async (dispatch) => {
    try {
      dispatch({ type: REVIEW_REQUEST });
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(`https://lms-mern-3.onrender.com/api/course/give?id=${id}&username=${username}`, myForm, config);
      console.log(data);
      dispatch({
        type: REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REVIEW_FAIL,
        payload: error,
      });
    }
  };

  export const reviewDel = (Courseid,id5,lectId)=> async(dispatch)=>{
    try {
      dispatch({type:DELETE_REVIEW_REQUEST});

      const {data} = await axios.delete(`https://lms-mern-3.onrender.com/api/course/delQna?Courseid=${Courseid}&id=${id5}&id2=${lectId}`)

      dispatch({
        type: DELETE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  }

  export const addNotes = (myForm,id,id1,lectId,quesId) => async (dispatch) => {
    try {
      dispatch({ type: NEW_NOTES_REQUEST });
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(`https://lms-mern-3.onrender.com/api/course/notes?id=${id}&id1=${id1}&id2=${lectId}&id3=${quesId}`, myForm, config);
      console.log(data);
      dispatch({
        type: NEW_NOTES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_NOTES_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const removeNotes = (id,id1,lectId,quesId) => async (dispatch) => {
    try {
      dispatch({type:DELETE_REVIEW_REQUEST});
    
      const { data } = await axios.delete(`https://lms-mern-3.onrender.com/api/course/noteDel?id=${id}&id1=${id1}&id2=${lectId}&id3=${quesId}`);
      dispatch({
        type: DELETE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };