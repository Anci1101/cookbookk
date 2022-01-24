import React, { useEffect, useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchCategories from '../redux/actions/fetchCategories'

const CreateForm = () => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handlecategory = (e) => {
        setSelectedCategory(e.target.value)
    }

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
                            value={selectedCategory}
                            onChange={handlecategory}
                            label="Recipe categories"
                            fullWidth
                            >
                            {categories && categories.map((category)=>(
                                <MenuItem key={category.id} value={category.title}>{category.title}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    
                    <Button>Add recipe</Button>

                </Grid>

                
            </Grid>
  );
};

export default CreateForm;
