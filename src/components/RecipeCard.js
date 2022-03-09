import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Box } from '@mui/system';

//TODO: add average time to be dynamic



const RecipeCard = ({recipe, handleDeleteRecipe}) => {

    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState('paper')

    const handleClickOpen = (scrollType) => {
        setOpen(true);
        setScroll(scrollType)
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const descriptionElementRef = React.useRef(null);
      React.useEffect(() => {
        if (open) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [open]);

    return (
            <Grid item xs={12} sm={4} md={4} >
                <Card >
                    <CardContent>
                        <Typography variant='h6'>{recipe.title}</Typography>
                            <Box style={{display:'flex'}}>
                                <Typography style={{flexGrow:'1'}} variant='subtitle1'>{recipe.category}</Typography>
                                <AvTimerIcon/>
                                <Typography>{recipe.time} min</Typography>
                            </Box>
                        <Typography style={{whiteSpace:'noWrap', overflow:'hidden', textOverflow: 'ellipsis' }} display='block' variant='body2' >{recipe.description}</Typography>
                    </CardContent>

                    <CardActions style={{display:'flex', justifyContent:'center', gap:'10px'}}>
                        <Button onClick = {()=>handleClickOpen('paper')} variant='outlined'>More info</Button>
                        <Button  onClick={()=> handleDeleteRecipe(recipe.id)} variant='outlined'>Delete</Button >
                    </CardActions>
                </Card>

                <Dialog
                    open={open}
                     
                    //TransitionComponent={Transition}
                    keepMounted
                    scroll={scroll}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{recipe.title}</DialogTitle>
                    <DialogContent sx={{display:'flex'}}>
                        <DialogContentText sx={{flexGrow:'1'}}>{recipe.category}</DialogContentText>
                        <DialogContentText><AvTimerIcon/></DialogContentText>
                        <DialogContentText>90 min</DialogContentText>
                    </DialogContent>
                    
                    <DialogContent dividers>
                        <DialogContentText ref={descriptionElementRef} id="alert-dialog-slide-description">
                            {recipe.description}
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
          
                    </DialogActions>
                    

                </Dialog>
            </Grid>
    )
}



export default RecipeCard
