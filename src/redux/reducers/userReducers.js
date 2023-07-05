import { EMAIL, NAME } from "../actions/actionTypes";

const initialSTate = {
    name: "",
    email: ""
}

const userReducer = (state = initialSTate, action)=> {
    switch(action.type){
        case EMAIL:
            return {...state, email: action.payload}

        case NAME:
            return {...state, name: action.payload}

        default:
            return state
    }
}

export default userReducer