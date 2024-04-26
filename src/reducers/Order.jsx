import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_REQUEST,
  MY_ORDERS_FAIL,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_REQUEST
}
from '../constants/Order'
export const createOrder = (state = {}, action) => {
    switch (action.type) {
      case CREATE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_ORDER_SUCCESS:
        return {
          loading: false,
          order: action.payload,
        };
      case CREATE_ORDER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const MyOrder = (state = {orders: []}, action) => {
    switch (action.type) {
      case MY_ORDERS_REQUEST:
        return {
          loading: true,
          orders:[]
        };
  
      case MY_ORDERS_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        };
  
      case MY_ORDERS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };