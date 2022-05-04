import isEmpty from "../../utilities/isEmpty";
import { SET_USER } from "../types";


const intialState= {
    isConnected : false,
    user:{}
}
export default function(state= intialState, action){
 switch (action.type) {
     case SET_USER:
        return {
            ...state,
            isConnected: !isEmpty(action.payload) ,
            user :action.payload
        } 
 
 
     default:
         return state
 }
}