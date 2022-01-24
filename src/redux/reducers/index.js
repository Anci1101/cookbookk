import { combineReducers } from "redux";
import recipeReducer from './recipeReducer'


const reducers = combineReducers({
    recipe: recipeReducer
})


export default reducers