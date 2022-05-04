import { ERRORS } from "../types";


const intialState={}

export default function (state= intialState, action) {
switch (action.type) {
    case ERRORS:
        return action.payload
        
        

    default:
        return state
}
}