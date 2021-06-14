import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs';
import GifGridItem from './components/GifGridItem';

const GifGrid = ( { category } ) => {
    
    // 2 puntos para renombrar el elemento destructurado, se llama data pero lo llamamos images dentro de este component
    const { data : images, loading } = useFetchGifs( category ); 

    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__slow">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map ( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;