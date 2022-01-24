import { Grid } from '@mui/material'
import React from 'react'
import RecipeCard from './RecipeCard';

const examples = ['Ana', 'pera', 'mika', 'jimmy', 'nadja', 'steva', 'brasno', 'palacinke', 'random']



const RecipeList = ({recipes}) => {
    return (
        <div style={{display: 'flex',
                     alignContent:'center', 
                     justifyContent:'center', 
                     alignItems:'center', 
                     padding:50}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {recipes.map((recipe)=>(
                    <RecipeCard xs={12} sm={4} md={4} key={recipe.id} recipe={recipe}/>
                    
                ))}
            </Grid>
        </div>
    )
}

export default RecipeList
