import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import BasicPagination from '../components/BasicPagination'
import NavBar from '../components/NavBar'
import RecipeList from '../components/RecipeList'
import fetchRecipes from '../redux/actions/fetchRecipes'

const Home = () => {

    const dispatch = useDispatch()

    const recipes = useSelector((state)=> state.recipe.recipes)

    
    const pending = useSelector((state) => state.recipe.pending) 
    const error = useSelector((state) => state.recipe.error) 

    useEffect(() => {
        const fecthData = () => {
             dispatch(fetchRecipes())
            
        }
        fecthData()
    
    }, [dispatch]);
    

    return (
        
        <div>
            <NavBar/>
            {pending && <div>loading...</div>}
            {error && <div>sth went wrong</div>}
            {recipes &&  <RecipeList recipes={recipes}/> }
            
            <BasicPagination/>
            
        </div>
    )
}

export default Home
