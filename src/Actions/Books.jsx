import {
  BOOKS_REQUEST,
  BOOKS_REQUEST_FAIL,
  BOOKS_REQUEST_SUCCESS,
  BOOKS_DETAILS_FAIL,
  BOOKS_DETAILS_REQUEST,
  BOOKS_DETAILS_SUCCESS,
  OLD_BOOKS_REQUEST,
  OLD_BOOKS_REQUEST_FAIL,
  OLD_BOOKS_REQUEST_SUCCESS,
  OLD_BOOKS_DEATILS,
  OLD_BOOKS_DEATILS_SUCCESS,
  OLD_BOOKS_DEATILS_FAIL,
  SIMILAR_BOOKS_DEATILS,
  SIMILAR_BOOKS_DEATILS_SUCCESS,
  SIMILAR_BOOKS_DEATILS_FAIL,
  UPLOAD_BOOKS_DEATILS,
  UPLOAD_BOOKS_DEATILS_SUCCESS,
  UPLOAD_BOOKS_DEATILS_FAIL,
  USER_BOOKS_DEATILS,
  USER_BOOKS_DEATILS_FAIL,
  USER_BOOKS_DEATILS_SUCCESS,
  BOOKS_EMAIL_FAIL,
  BOOKS_EMAIL_REQUEST,
  BOOKS_EMAIL_SUCCESS,
  DELETE_BOOKS_DEATILS,
  DELETE_BOOKS_DEATILS_SUCCESS,
  DELETE_BOOKS_DEATILS_FAIL
} from "../constants/Books";

import axios from "axios";

export const getAllBooks = (search) => async (dispatch) => {
  try {
    dispatch({ type: BOOKS_REQUEST });
    let link = "";
    if (search !== "") {
      link = `https://www.dbooks.org/api/search/${search}`;
    } else {
      link = `https://www.dbooks.org/api/search/{query}`;
    }
    const { data } = await axios.get(link);
    console.log(data);
    dispatch({
      type: BOOKS_REQUEST_SUCCESS,
      payload: data.books,
    });
  } catch (error) {
    dispatch({
      type: BOOKS_REQUEST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getBooksDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOKS_DETAILS_REQUEST });
    const { data } = await axios.get(`https://www.dbooks.org/api/book/${id}`);

    dispatch({
      type: BOOKS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOKS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllOldBooks =
  (search = "", page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: OLD_BOOKS_REQUEST });
      let link = "";
      if (search !== "") {
        link = `https://lms-mern-3.onrender.com/api/book/getAd?keyword=${search}&page=${page}`;
      } else {
        link = `https://lms-mern-3.onrender.com/api/book/getAd?keyword=${""}&page=${page}`;
      }
      const { data } = await axios.get(link);
      dispatch({
        type: OLD_BOOKS_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: OLD_BOOKS_REQUEST_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getold = (id) => async (dispatch) => {
  try {
    dispatch({ type: OLD_BOOKS_DEATILS });
    const { data } = await axios.get(
      `https://lms-mern-3.onrender.com/api/book/getoneAd/${id}`
    );
    dispatch({
      type: OLD_BOOKS_DEATILS_SUCCESS,
      payload: data.book,
    });
  } catch (error) {
    dispatch({
      type: OLD_BOOKS_DEATILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getsimilarBooks = (id) => async (dispatch) => {
  try {
    dispatch({ type: SIMILAR_BOOKS_DEATILS });
    const { data } = await axios.get(
      `https://lms-mern-3.onrender.com/api/book/sim?id=${id}`
    );
    console.log(data);
    dispatch({
      type: SIMILAR_BOOKS_DEATILS_SUCCESS,
      payload: data.book,
    });
  } catch (error) {
    dispatch({
      type: SIMILAR_BOOKS_DEATILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const upload = (myForm, id) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_BOOKS_DEATILS });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `https://lms-mern-3.onrender.com/api/book/adOld?id=${id}`,
      myForm,
      config
    );
    console.log(data);
    dispatch({ type: UPLOAD_BOOKS_DEATILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPLOAD_BOOKS_DEATILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getapniBooks = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_BOOKS_DEATILS });
    const { data } = await axios.get(
      `https://lms-mern-3.onrender.com/api/book/getbyUser/${id}`
    );
    console.log(data);
    dispatch({
      type: USER_BOOKS_DEATILS_SUCCESS,
      payload: data.book,
    });
  } catch (error) {
    dispatch({
      type: USER_BOOKS_DEATILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteBooks = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BOOKS_DEATILS });
    const { data } = await axios.delete(`https://lms-mern-3.onrender.com/api/book/del/${id}`);
    dispatch({
      type: DELETE_BOOKS_DEATILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BOOKS_DEATILS_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const Email = (myForm,em1)=> async(dispatch)=>{
  try {
    dispatch({ type: BOOKS_EMAIL_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`https://lms-mern-3.onrender.com/api/book/mess?${em1}`,myForm, config);
    dispatch({ type: BOOKS_EMAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({type: BOOKS_EMAIL_FAIL,payload: error.response.data});
  }
}
