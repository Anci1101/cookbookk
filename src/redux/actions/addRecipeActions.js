export const ADD_RECIPES_PENDING = 'ADD_PRECIPES_PENDING';
export const ADD_RECIPES_SUCCESS = 'ADD_PRECIPES_SUCCESS';
export const ADD_RECIPES_ERROR = 'ADD_PRECIPES_ERROR';

export const addRecipesPending = () => {
    return {
        type: ADD_RECIPES_PENDING
    }
}

 export const addRecipesSuccess = (values) => {
    return {
        type: ADD_RECIPES_SUCCESS,
        payload: values
        
    }
}

export const addRecipesError = (error) => {
    return {
        type: ADD_RECIPES_ERROR,
        payload: error
    }
}






