import axios from "axios";



export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';


export const getNotifcation = () => async (dispatch) => {
  const response =  axios.get("http://wolf.skipems.com/NotificationApi/");
  response.then((responses)=>{
    
    dispatch({ type: GET_NOTIFICATIONS, payload: responses.data });
  }).catch((err)=>{
  
  })
  }
