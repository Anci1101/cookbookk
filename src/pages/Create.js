import React from 'react'
import CreateForm from '../components/CreateForm'
import NavBar from '../components/NavBar'

const Create = () => {
    return (
        <div>
            <NavBar showSearchInput={false}/>
            <CreateForm/>
        </div>
    )
}

export default Create
