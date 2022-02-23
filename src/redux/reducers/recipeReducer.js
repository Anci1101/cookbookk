import { FETCH_PRECIPES_PENDING, FETCH_PRECIPES_SUCCESS, FETCH_PRECIPES_ERROR } from '../actions/recipeActions'
import { DELETE_RECIPE_SUCCESS } from '../actions/deleteRecipeActions'
import { ADD_PRECIPES_SUCCESS } from '../actions/addRecipeActions'

const initialState = {
    pending: false,
    recipes: [],
    error: null
}



const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRECIPES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRECIPES_SUCCESS:
            console.log('got');
            return {
                ...state,
                pending: false,
                recipes: action.payload
            }
        case FETCH_PRECIPES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: state.recipes.filter((recipe) => recipe.id !== action.payload)
            }
        case ADD_PRECIPES_SUCCESS:
            return {
                ...state,
                recipes: [state.recipes, action.payload]

            }
        default: 
            return state;
    }
    
}


export default recipeReducer
