import { deleteRecipePending, deleteRecipeSuccess, deleteRecipeError } from "./deleteRecipeActions.js";


const deleteRecipe = (id) => {
    
    return dispatch => {
        
        dispatch(deleteRecipePending())
        fetch(`http://localhost:8000/recipes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(deleteRecipeSuccess(id));
            console.log(res, 'res iz delete recipes');
            return res;
            
        })
        .catch(error => {
            dispatch(deleteRecipeError(error));
        })
    }
}

export default deleteRecipe;
