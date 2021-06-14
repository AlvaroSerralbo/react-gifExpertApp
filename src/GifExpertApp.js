import React, { useState } from 'react'

import AddCategory from './components/AddCategory';
import GifGrid from './GifGrid';


export const GifExpertApp = () => {

    // HOOK

    const [categories, setCategories] = useState(['Atleti']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map ( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>


        </>
    )
}

export default GifExpertApp;
