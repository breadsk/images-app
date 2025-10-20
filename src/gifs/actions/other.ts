
improt axios from 'axios'


export const getGifsByQuery = async(query:string) => {

    const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
        params:{
            q:query,
            limit:10,
            lang:'es',
            //api_key: 'sdfasadsfasdasdfafs'
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        }
    })

}