import { createStore,combineReducers ,applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import bookDoctors from "./Reducers/bookDoctor";


const reducers = combineReducers({
    bookDoctors:bookDoctors
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;