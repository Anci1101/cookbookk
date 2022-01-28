import React, { useEffect, useState } from 'react'
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

    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        const fecthData = () => {
             dispatch(fetchRecipes())
            
        }
        fecthData()
    
    }, [dispatch]);

    const handleSearchCategory = (e, value) => {
        setCurrentCategory(value)
        console.log(value, 'search value');
    }

    const filteredRecipesByCurrentCategory = (recipes, currentCategory) => {
        return recipes.filter((recipe)=>recipe.category === currentCategory)
    }
    

    return (
        
        <div>
            <NavBar handleSearchCategory={handleSearchCategory}/>
            {pending && <div>loading...</div>}
            {error && <div>sth went wrong</div>}
            {recipes &&  <RecipeList recipes={currentCategory ? filteredRecipesByCurrentCategory(recipes, currentCategory) : recipes}/> }
            
            <BasicPagination/>
            
        </div>
    )
}

export default Home
