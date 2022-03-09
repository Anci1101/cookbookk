import { FETCH_RECIPES_PENDING, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/recipeActions'
import { DELETE_RECIPE_SUCCESS } from '../actions/deleteRecipeActions'
import { ADD_RECIPES_SUCCESS } from '../actions/addRecipeActions'

const initialState = {
    pending: false,
    recipes: [],
    error: null
}



const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_RECIPES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_RECIPES_SUCCESS:
            console.log('got');
            return {
                ...state,
                pending: false,
                recipes: action.payload
            }
        case FETCH_RECIPES_ERROR:
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
        case ADD_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: [state.recipes, action.payload]

            }
        default: 
            return state;
    }
    
}


export default recipeReducer
