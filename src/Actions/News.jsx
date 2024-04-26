import {
    NEWS_FAIL,
    NEWS_REQUEST,
    NEWS_SUCCESS
}
from '../constants/News';
import axios from "axios";

export const getNews = (currentPage=1)=> async(dispatch)=>{
    try {
     dispatch({type:NEWS_REQUEST});
     const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&page=${currentPage}&category=&apiKey=371b4dc51f56499aa1fdec7f9dc3b7ed`)
     console.log(data);
     dispatch({
      type:NEWS_SUCCESS,
      payload:data

    })
    } catch (error) {
        console.log(error);
    }
   }
