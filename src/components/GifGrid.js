import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {
/*Una función async puede contener una expresión await, la cual pausa la ejecución de la función 
asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de 
la función async y devuelve el valor resuelto. */
    //const [images, setImages] = useState([]);
    //data:images =>renombra data por images
    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__flipInY">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p>}
                <div className = "card-grid">
                    <div className="card-grid contenedor">
                        {
                            images.map(img=>(
                                <GifGridItem 
                                    key={img.id}
                                    // con ... mando cada propiedad de imgs como propiedad independiente      
                                    { ...img} 
                                />
                            ))
                        }
                    </div>
                </div>
        </>
    )
}
