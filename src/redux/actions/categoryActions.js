export const FETCH_CATEGORY_PENDING = 'FETCH_CATEGORY_PENDING';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR';

export const fetchCategoryPending = () => {
    return {
        type: FETCH_CATEGORY_PENDING
    }
}

 export const fetchCategorySuccess = (categories) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: categories
    }
}

export const fetchCategoryError = (error) => {
    return {
        type: FETCH_CATEGORY_ERROR,
        payload: error
    }
}




