import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Box } from '@mui/system';


const RecipeCard = ({recipe}) => {
    return (
            <Grid item xs={12} sm={4} md={4} >
                <Card>
                    <CardContent>
                        <Typography variant='h6'>{recipe.title}</Typography>
                            <Box style={{display:'flex'}}>
                                <Typography style={{flexGrow:'1'}} variant='subtitle1'>{recipe.category}</Typography>
                                <AvTimerIcon/>
                                <Typography>90</Typography>
                            </Box>
                        <Typography display='inline' variant='body2' >{recipe.description}</Typography>
                    </CardContent>

                    <CardActions style={{display:'flex', justifyContent:'center', gap:'10px'}}>
                        <Button variant='outlined'>More info</Button>
                        <Button variant='outlined'>Delete</Button>
                    </CardActions>
                </Card>
            </Grid>
    )
}

export default RecipeCard
