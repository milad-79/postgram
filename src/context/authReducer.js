const AuthReducer = (state ,action)=>{
    switch(action.type){
        case 'LOGIN':{
            return{
                currentUser: action.payload
            }
        }

        case 'SINGING':{
            return{
                currentUser: action.payload
            }
        }

        default:
            return state
    }
}

export default AuthReducer;