import { Pagination, Stack } from '@mui/material'
import React from 'react'

const BasicPagination = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Stack>
                <Pagination count={10}/>
            </Stack>
        </div>
    )
}

export default BasicPagination
