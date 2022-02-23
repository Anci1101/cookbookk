import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteRecipe from '../redux/actions/deleteRecipes';
import BasicPagination from './BasicPagination';
import RecipeCard from './RecipeCard';



const RecipeList = ({recipes, currentPageState, setCurrentPageState}) => {
    
    const[postsPerPage] = useState(9);

    const dispatch = useDispatch()

    const handleDeleteRecipe = (id) => {
        dispatch(deleteRecipe(id))
        console.log('delete recipe');
    }

    const handleChange = (event, page) => {
        setCurrentPageState(page)
        window.scrollTo(0, 0)
}

    const indexOfLastPost = currentPageState * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);


    return (
        <div>
        <div style={{display: 'flex',
                     alignContent:'center', 
                     justifyContent:'center', 
                     alignItems:'center', 
                     flexDirection:'column',
                     padding:50}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {currentPosts.map((recipe)=>(
                    <RecipeCard xs={12} sm={4} md={4} key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
                    
                ))}
            </Grid>

            <BasicPagination postsPerPage={postsPerPage}
                             totalRecipes={recipes.length}
                             page={currentPageState}
                             handleChange={(event, page)=>handleChange(event, page)}
            />

           
            </div>
            {/* <BasicPagination postsPerPage={postsPerPage}
                             totalRecipes={recipes.length}
                             page={currentPageState}
                             handleChange={(event, page)=>handleChange(event, page)}
            /> */}
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
