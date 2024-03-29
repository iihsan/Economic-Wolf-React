
import axios from 'axios'


export const GET_TIMELINE = 'GET_TIMELINE';


export const getTimelineData = () => async (dispatch) => {
    const response =  axios.get("http://wolf.skipems.com/TimelineApi/");
    response.then((value)=>{
      dispatch({ type: GET_TIMELINE, payload: value.data });
    })
   
  };
  