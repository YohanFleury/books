import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerAddBooks from "redux/reducers/reducerAddBooks";
import thunk from 'redux-thunk'
import reducerFetchedBooks from "./reducerFetchBooks";


const rootreducer = combineReducers({
    library: reducerAddBooks,
    search: reducerFetchedBooks
})


const store = createStore(rootreducer, applyMiddleware(thunk))

export default store