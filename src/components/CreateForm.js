import React, { useEffect } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchCategories from '../redux/actions/fetchCategories'

const CreateForm = () => {

    const dispatch = useDispatch()

    const categories = useSelector((state) => state.category.categories) 
    console.log(categories, 'categories');

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])


  return (
    <Grid container style={{display:'flex', alignItems:'center', justifyContent:'center', alignContent:'center', flexDirection:'column'}}> 
                
                <Grid item sx={{
                    width: {
                    xs: 300, // theme.breakpoints.up('xs')
                    sm: 500, // theme.breakpoints.up('sm')
                    md: 800, // theme.breakpoints.up('md')
                    lg: 1000, // theme.breakpoints.up('lg')
                    xl: 1000, // theme.breakpoints.up('xl')
                    },
                }} 
                style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'center', flexDirection:'column', padding:20,background:'rgb(158, 191, 149)' }}
                >
                    
                    <Typography>Create a recipe</Typography>
                    
                    <TextField label='Recipe title' variant='standard' fullWidth/>
                    <TextField
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="standard"
                        fullWidth
                    />
                    <TextField label='Preparing time in minutes' variant='standard' fullWidth/>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 260 }}>
                        <InputLabel id="demo-simple-select-standard-label">Recipe category</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value=''
                            // onChange={handleChange}
                            label="Recipe categories"
                            fullWidth
                            >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <Button>Submit</Button>

                </Grid>

                
            </Grid>
  );
};

export default CreateForm;
