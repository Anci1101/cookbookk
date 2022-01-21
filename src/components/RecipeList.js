import { Grid, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

const examples = ['Ana', 'pera', 'mika', 'jimmy', 'nadja', 'steva', 'brasno', 'palacinke', 'random']

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const RecipeList = () => {
    return (
        <div style={{display: 'flex',
                     alignContent:'center', 
                     justifyContent:'center', 
                     alignItems:'center', 
                     padding:50}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {examples.map((item, index)=>(
                    <Grid item xs={12} sm={4} md={4} key={index}>
                        <Item>{item}
                            <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis aliquid odit natus incidunt, harum velit quisquam minus similique tenetur aliquam nesciunt libero nihil veniam reprehenderit inventore, et ratione quis cum aperiam. Doloribus quas nisi molestiae perferendis. Magnam ea tenetur sunt fuga nam, in illum, maiores maxime blanditiis, facilis laboriosam ipsa.</Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default RecipeList
