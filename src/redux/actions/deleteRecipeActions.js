export const DELETE_RECIPE_PENDING = 'DELETE_RECIPE_PENDING';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_ERROR = 'DELETE_RECIPE_ERROR';

export const deleteRecipePending = () => {
    return {
        type: DELETE_RECIPE_PENDING
    }
}

 export const deleteRecipeSuccess = (id) => {
    return {
        type: DELETE_RECIPE_SUCCESS,
        payload: id
    }
}

export const deleteRecipeError = (error) => {
    return {
        type: DELETE_RECIPE_ERROR,
        payload: error
    }
}






