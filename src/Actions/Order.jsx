import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_REQUEST,
    MY_ORDERS_FAIL,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_REQUEST
  }
  from '../constants/Order'
  import axios from 'axios';

  export const CreateOr = (order,id)=> async(dispatch)=>{
    try {
        dispatch({ type: CREATE_ORDER_REQUEST });
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
     const {data} = await axios.post(`https://lms-mern-3.onrender.com/api/order/createOrder?id=${id}`,order,config)
     console.log(data);
     dispatch({ type: CREATE_ORDER_SUCCESS, payload: data  });
    } catch (error) {
      console.log(error);
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message,
          });
    }
  }

  export const myOrder = (id)=> async(dispatch)=>{
    try {
      dispatch({ type: MY_ORDERS_REQUEST });
      const { data } = await axios.get(`https://lms-mern-3.onrender.com/api/order/myOrder?id=${id}`);
      dispatch({ type: MY_ORDERS_SUCCESS, payload: data});
    } catch (error) {
      console.log(error);
    }
  }  