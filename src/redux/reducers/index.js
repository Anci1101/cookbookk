import { combineReducers } from "redux";
import recipeReducer from './recipeReducer'
import categoryReducer from './categoryReducer'


const reducers = combineReducers({
    recipe: recipeReducer,
    category: categoryReducer
})


export default reducers