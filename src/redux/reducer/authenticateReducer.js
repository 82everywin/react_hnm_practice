
let initialState = {
    id:'',
    pw:'',
    authenticate: false
};

function authenticateReducer(state=initialState,action){
    let {type,payload} = action
    switch(type){
        case "LOGIN_SUCCESS":
            console.log("login success reducer")
            return {...state,id:payload.id, pw:payload.pw,authenticate:true};
        case "AUTHENTICATE":
            return {...state, authenticate: !(state.authenticate)};
        default :
            return {...state};
    }

}

export default authenticateReducer