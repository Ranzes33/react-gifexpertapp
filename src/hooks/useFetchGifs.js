import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true

    });
    //los effect no pueden ser asyc porque esperan algo sincrono
    //en este caso se hace el efecto cuando solo quiero cambiar la categoria
    useEffect( ()=>{
        getGifs(category)
            .then( imgs=>{
                    setState({
                        data:imgs,
                        loading: false
                    })
            }); //.then(imgs => setImages.imgs)
    }, [category]) //[]si esta vacio solo se ejecuta cuando es renderizado por primera vez

    return state //{ data:[], loading:true}
}