import {
    ADD_TO_BOOK,
    REMOVE_FROM_BOOK,
    CLEAR_BOOK
} from '../constants'

const bookDoctors = (state =[],action) =>{
    switch(action.type){
        case ADD_TO_BOOK:
            return [action.payload]
        case REMOVE_FROM_BOOK:
            return state.filter(bookDoctor => bookDoctor !== action.payload)
        case CLEAR_BOOK:
            return state = []
    }
    return state;
}
export default bookDoctors;