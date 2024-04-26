import {
     NEWS_FAIL,
     NEWS_REQUEST,
     NEWS_SUCCESS
}
from '../constants/News';

export const NewsReducer = (state = { news: [] }, action) => {
    switch (action.type) {
      case NEWS_REQUEST:
        return {
          loading: true,
          news: [],
        };
      case NEWS_SUCCESS:
        return {
          loading: false,
          news:action.payload,
          total:action.payload.totalResults,
        };
      case NEWS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };