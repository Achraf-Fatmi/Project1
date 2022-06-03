import { DELETE_PROFILE, GET_PROFILE, SET_PROFILE, SET_PROFILES } from "../types";

const initialState = {
    profiles : [],
    profile: {},
    visitedProfile:{}
}

export default function (state= initialState, action){
    switch (action.type) {
      case SET_PROFILE:
        return {
          ...state,
          profile: action.payload,
        };
      case SET_PROFILES:
        return {
          ...state,
          profiles: action.payload,
        };
        case GET_PROFILE:
          return {      
            
            ...state,
            visitedProfile:action.payload
          }
        case DELETE_PROFILE:
        return {
          ...state,
          profiles: state.profiles.filter(p=>p._id !== action.payload),
        };

      default:
        return state;
    }
}