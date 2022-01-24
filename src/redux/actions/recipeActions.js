export const FETCH_PRECIPES_PENDING = 'FETCH_PRECIPES_PENDING';
export const FETCH_PRECIPES_SUCCESS = 'FETCH_PRECIPES_SUCCESS';
export const FETCH_PRECIPES_ERROR = 'FETCH_PRECIPES_ERROR';
export const DELETE_RECIPE = 'DELETE_RECIPE'

export const fetchRecipesPending = () => {
    return {
        type: FETCH_PRECIPES_PENDING
    }
}

 export const fetchRecipesSuccess = (recipes) => {
    return {
        type: FETCH_PRECIPES_SUCCESS,
        payload: recipes
    }
}

export const fetchRecipesError = (error) => {
    return {
        type: FETCH_PRECIPES_ERROR,
        payload: error
    }
}

export const deleteRecipe = (id) => {
    return{
        type: DELETE_RECIPE,
        payload: id
    }
}


