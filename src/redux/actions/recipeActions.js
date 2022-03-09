export const FETCH_RECIPES_PENDING = 'FETCH_PRECIPES_PENDING';
export const FETCH_RECIPES_SUCCESS = 'FETCH_PRECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_PRECIPES_ERROR';
export const DELETE_RECIPE = 'DELETE_RECIPE'

export const fetchRecipesPending = () => {
    return {
        type: FETCH_RECIPES_PENDING
    }
}

 export const fetchRecipesSuccess = (recipes) => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: recipes
    }
}

export const fetchRecipesError = (error) => {
    return {
        type: FETCH_RECIPES_ERROR,
        payload: error
    }
}


