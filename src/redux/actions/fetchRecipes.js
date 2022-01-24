import { fetchRecipesPending, fetchRecipesSuccess, fetchRecipesError } from "./recipeActions.js";


const fetchRecipes = () => {
    
    
    return dispatch => {
        // setTimeout(() => {
            
        dispatch(fetchRecipesPending())
        fetch('http://localhost:8000/recipes',{
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
                
            }
            console.log(res);
            dispatch(fetchRecipesSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchRecipesError(error));
        })
        // }, 2000);
        
    }
}

export default fetchRecipes;
