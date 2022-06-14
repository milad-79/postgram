import { createContext ,useEffect,useReducer } from "react";
import AuthReducer from "./authReducer";

const INITAIAL_STATE={
    currentUser: JSON.parse(localStorage.getItem('user')) || null
};

export const AuthCotext = createContext(INITAIAL_STATE);

export const AuthContextProvider=({children})=>{
    const[state, dispatch] =useReducer(AuthReducer ,INITAIAL_STATE);

useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(state.currentUser))
},[state.currentUser])

    return(
        <AuthCotext.Provider value={{currentUser: state.currentUser ,dispatch}}>
            {children}
        </AuthCotext.Provider>
    )
}