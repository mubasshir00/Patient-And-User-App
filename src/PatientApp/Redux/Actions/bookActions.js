import {
    ADD_TO_BOOK,
    REMOVE_FROM_BOOK,
    CLEAR_BOOK
} from '../constants'

export const addToBook = (payload) =>{
    return {
        type:ADD_TO_BOOK,
        payload
    }
}

export const removeFromBook = (payload) =>{
    return {
        type:REMOVE_FROM_BOOK,
        payload
    }
}

export const clearBook = () =>{
    return {
        type:CLEAR_BOOK
    }
}