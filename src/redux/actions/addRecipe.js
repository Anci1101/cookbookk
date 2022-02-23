import { addRecipesPending, addRecipesSuccess, addRecipesError } from "./addRecipeActions.js";



const addRecipe = (values) => {

        

    return dispatch => {
        
        dispatch(addRecipesPending())
        fetch(`http://localhost:8000/recipes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(addRecipesSuccess(values));
            console.log(res, 'res iz add recipes');
            // return res;
            
        })
        .catch(error => {
            dispatch(addRecipesError(error));
        })
    }
}

export default addRecipe;
