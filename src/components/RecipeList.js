import { Grid } from '@mui/material'
import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteRecipe from '../redux/actions/deleteRecipes';
import RecipeCard from './RecipeCard';



const RecipeList = ({recipes}) => {
    
    const dispatch = useDispatch()

    const handleDeleteRecipe = (id) => {
        dispatch(deleteRecipe(id))
        console.log('delete recipe');
    }
    return (
        <div style={{display: 'flex',
                     alignContent:'center', 
                     justifyContent:'center', 
                     alignItems:'center', 
                     padding:50}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {recipes.map((recipe)=>(
                    <RecipeCard xs={12} sm={4} md={4} key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
                    
                ))}
            </Grid>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteRecipe
}, dispatch)

export default connect(
    // mapStateToProps,
    mapDispatchToProps
)(RecipeList );
