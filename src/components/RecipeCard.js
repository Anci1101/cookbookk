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

const RecipeCard = ({item}) => {
    return (
            <Grid item xs={12} sm={4} md={4}>
                <Item>{item}
                    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis aliquid odit natus incidunt, harum velit quisquam minus similique tenetur aliquam nesciunt libero nihil veniam reprehenderit inventore, et ratione quis cum aperiam. Doloribus quas nisi molestiae perferendis. Magnam ea tenetur sunt fuga nam, in illum, maiores maxime blanditiis, facilis laboriosam ipsa.</Typography>
                </Item>
            </Grid>
    )
}

export default RecipeCard
