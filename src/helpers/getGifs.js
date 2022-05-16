

export const getGifs = async( category ) =>{
    //encodeUri para eliminar espacios vacios, etc y buscar giff en base a eso
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BmYLSlN3YHoLxoznxwz5LsPnVkb1MrIm`
    const resp = await fetch( url);
    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url : img.images.downsized_medium.url 
        }
    })

    return gifs;
}