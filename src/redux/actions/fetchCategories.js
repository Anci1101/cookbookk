import { fetchCategoryPending, fetchCategorySuccess, fetchCategoryError } from "./categoryActions.js";


const fetchRecipes = () => {
    
    return dispatch => {
        
        dispatch(fetchCategoryPending())
        fetch('http://localhost:8000/categories')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCategorySuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchCategoryError(error));
        })
    }
}

export default fetchRecipes;
