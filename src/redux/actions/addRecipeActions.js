export const ADD_PRECIPES_PENDING = 'ADD_PRECIPES_PENDING';
export const ADD_PRECIPES_SUCCESS = 'ADD_PRECIPES_SUCCESS';
export const ADD_PRECIPES_ERROR = 'ADD_PRECIPES_ERROR';

export const addRecipesPending = () => {
    return {
        type: ADD_PRECIPES_PENDING
    }
}

 export const addRecipesSuccess = (values) => {
    return {
        type: ADD_PRECIPES_SUCCESS,
        payload: values
        
    }
}

export const addRecipesError = (error) => {
    return {
        type: ADD_PRECIPES_ERROR,
        payload: error
    }
}






