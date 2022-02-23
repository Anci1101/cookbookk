import { Pagination, Stack } from '@mui/material'
import React from 'react'

const BasicPagination = ({totalRecipes, page, handleChange, postsPerPage}) => {

    const totalPages = Math.ceil(totalRecipes/postsPerPage)

    return (
        <div style={{display:'flex', justifyContent:'center', padding:'10px'}}>
            <Stack>
                <Pagination count={totalPages}
                            page={page}
                            onChange={handleChange}
                />
            </Stack>
        </div>
    )
}

export default BasicPagination
