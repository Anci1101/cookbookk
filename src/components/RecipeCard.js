import { Grid, Typography } from '@mui/material'
import React from 'react'

import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const RecipeCard = ({recipe}) => {
    return (
            <Grid item xs={12} sm={4} md={4}>
                <Item>{recipe.title}
                    <Typography>{recipe.description}</Typography>
                </Item>
            </Grid>
    )
}

export default RecipeCard
