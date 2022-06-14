import { GET_POST } from "../type";

export default function getPost(state={},action){
    switch(action.type){
        case GET_POST :
            return {...state, ...action.payload}
        default:
            return state
    }
}