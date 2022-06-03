import axios from "axios"
import { ERRORS, SET_PROFILE, SET_PROFILES,DELETE_PROFILE, GET_PROFILE } from "../types"

export const AddProfile = (form) =>dispatch=>{
    axios
    .post("api/profiles", form)
    .then(res=> {
        console.log(res.data)
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })

}

export const GetProfile = () =>dispatch=>{
    axios
    .get("api/profile")
    .then(res=> {
        dispatch({
            type: SET_PROFILE,
            payload: res.data
        })
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })

}


export const GetProfiles = () =>dispatch=>{
    axios
    .get("api/profiles")
    .then(res=> {
        dispatch({
            type: SET_PROFILES,
            payload: res.data
        })
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })

}
export const getProfileById = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/profile/${id}`);
      console.log("rs=es : ",res.data)

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERRORS,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };

export const DeleteProfile = (id) =>dispatch=>{
    if (window.confirm("Are you certain you want to delete this profile?")){
        axios
    .delete(`api/profiles/${id}`)
    .then(res=> {
        dispatch({
            type: DELETE_PROFILE,
            payload: id
        })
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
    }

}