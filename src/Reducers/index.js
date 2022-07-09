import { combineReducers } from "redux";
import { reducer } from "redux-form";
import {   CREATE_STREAM,
    GET_STREAMS,
    GET_STREAM,
    EDIT_STREAM,
    DELETE_STREAM } from "../Actions/type";
import _ from "lodash";

const isSignedInReducer = (state={isSignedIn:null,userId:null},action) => {
    if(action.type==="SIGN_IN") return {...state,isSignedIn:true,userId:action.payload};
    if(action.type==="SIGN_OUT") return {...state,isSignedIn:false,userId:null};
    return state;
}

const streamReducer = (state={},action) => {
switch (action.type){
    
    case GET_STREAMS : return {...state,..._.mapKeys(action.payload,'id')}

    case GET_STREAM : return {...state,[action.payload.id]:action.payload};

    case CREATE_STREAM : return {...state,[action.payload.id]:action.payload};
    
    case EDIT_STREAM : return {...state,[action.payload.id]:action.payload};

    case DELETE_STREAM : return _.omit(state,action.payload)

//         const newState = {}

//         Object.entries(state).map((arr)=>{
//               if(arr[0]!==action.payload) newState[arr[0]]=arr[1]
// })
// return newState;

    default: return state;
}

}



export default combineReducers ({
    auth:isSignedInReducer,
    form:reducer,
    streams:streamReducer
})

