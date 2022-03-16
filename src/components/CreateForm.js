import React, { useEffect, useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchCategories from '../redux/actions/fetchCategories'
import { useNavigate } from "react-router-dom";
import addRecipe from '../redux/actions/addRecipe';

const CreateForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {title: '', description: '', time: '', category: ''}

    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState([]);
    
    const categories = useSelector((state) => state.category.categories) 

    useEffect(() => {
        dispatch(fetchCategories())
     },[dispatch])

    const handleFormValue = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        setformValues({...formValues, [name]:value})   
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const hasFormErrors = validate(formValues)
        setformErrors(hasFormErrors)
       
        if (!hasFormErrors.length){
               dispatch(addRecipe(formValues))
               navigate('/');
        } 
    }

    const validate = (values) => {
        let emptyFields = []
        Object.entries(values).forEach(([field,value]) => {

            if (value === '') {
                emptyFields = [...emptyFields,field]
            }
            
        })
       return emptyFields;
    }

  return (
    <Grid container style={{display:'flex',
                            alignItems:'center', 
                            justifyContent:'center', 
                            alignContent:'center', 
                            flexDirection:'column'}}
    > 
        <form onSubmit={handleSubmit}>
            <Grid item sx={{
                    width: {
                    xs: 300, // theme.breakpoints.up('xs')
                    sm: 500, // theme.breakpoints.up('sm')
                    md: 800, // theme.breakpoints.up('md')
                    lg: 1000, // theme.breakpoints.up('lg')
                    xl: 1000, // theme.breakpoints.up('xl')
                    },
                }} 
                style={{display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center', 
                        alignContent:'center', 
                        flexDirection:'column', 
                        padding:20,
                        background:'rgb(158, 191, 149)' }}
            >
                    
                <Typography>Create a recipe</Typography>
                   
                <TextField 
                    value={formValues.title} 
                    onChange={(e)=>handleFormValue(e)}
                    label='Recipe title' 
                    variant='standard' 
                    fullWidth
                    name='title'
                    error={formErrors.includes('title')}
                />
                       
                <TextField
                    value={formValues.description}
                    onChange={handleFormValue}
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    variant="standard"
                    fullWidth
                    name='description'
                    error={formErrors.includes('description')}
                />

                <TextField 
                    value={formValues.time}
                    onChange={handleFormValue}
                    label='Preparing time in minutes' 
                    type="number"
                    variant='standard' 
                    fullWidth
                    name='time'
                    error={formErrors.includes('time')}
                />

                <FormControl variant="standard" sx={{ m: 1, minWidth: 260 }}>
                    <InputLabel id="demo-simple-select-standard-label">Recipe category</InputLabel>
                    <Select
                        value={formValues.category}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        onChange={handleFormValue}
                        name='category'
                        label="Recipe categories"
                        error={formErrors.includes('category')}
                        fullWidth
                    >
                        {categories && categories.map((category)=>(
                            <MenuItem key={category.id} value={category.title}>{category.title}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                        
                <Button type='submit'> Add recipe </Button>
            </Grid>
        </form>
    </Grid>
  );
};

export default CreateForm;
