import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../reducers/index";
import thunk from 'redux-thunk';


const composedEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)


export const store = createStore(
    reducers,
    {},
    composedEnhancers
)