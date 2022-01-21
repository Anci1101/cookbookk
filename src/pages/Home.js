import React from 'react'
import BasicPagination from '../components/BasicPagination'
import NavBar from '../components/NavBar'
import RecipeList from '../components/RecipeList'

const Home = () => {
    return (
        
        <div>
            <NavBar/>
            
            <RecipeList/>
            
            <BasicPagination/>
            
        </div>
    )
}

export default Home
