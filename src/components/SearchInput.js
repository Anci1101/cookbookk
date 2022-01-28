import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchCategories from '../redux/actions/fetchCategories'

const SearchInput = ({handleSearchCategory}) => {

      const dispatch = useDispatch()

    const categories = useSelector((state) => state.category.categories) 
    const options = categories.map((category)=>category.title)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

  return (
    <Autocomplete
        onChange={(e, value)=>handleSearchCategory(e, value)}
        options={options}
        renderInput={(params) => <TextField {...params} label="Find recipe" />}
    />
);
};
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCategories
    
}, dispatch)

export default connect(
    mapDispatchToProps
    )(SearchInput);
