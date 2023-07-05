import {NAME, EMAIL} from "./actionTypes"

export const name = (text) => {
    return {
        type: NAME,
        payload: text
    }
} 

export const email = (text) => {
    return {
        type: EMAIL,
        payload: text
    }
} 