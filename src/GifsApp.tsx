
import { useState } from 'react'

import { CustomHeader , SearchBar } from './shared/components'
import { GifList, PreviousSearches } from './gifs/components'


import { robots } from './mock-data/robots.mocks'
import { robotsProps } from './gifs/interfaces/image.interface'
import { getImagesByQuery } from './gifs/actions/get-images-by-query.action'

import './index.css'


export const GifsApp = () => {

  const [images , setImages] = useState<robotsProps[]>([]);
  const[ previousTerms , setPreviousTerms ] = useState(['']);

  //Comunicación entre componentes
  const handleTermClicked = (term:string) => {
    console.log({ term });
  } 

  // Query a la consulta que la persona escriba
  const handleSearch = async( query : string = '' ) => {

    query = query.trim().toLowerCase();

    if(query.length === 0) return;

    if(previousTerms.includes(query)) return;

    
    setPreviousTerms( [query , ...previousTerms].splice(0,8) )

    console.log(`Nombre de robot es: ${query}`);
    await getImagesByQuery(query)
    
    //const currentTerms = previousTerms.slice(0,8);        
    //currentTerms.unshift(query);
    //setPreviousTerms( currentTerms )
  }

  return (
    <>
       <CustomHeader 
          title="Mis Gifs" 
          description="Descubre y comparte el GIF perfecto" />

        <SearchBar
          placeholder="Busca lo que quieras"
          onQuery = { handleSearch }
          />
        
        <PreviousSearches 
          searches={ previousTerms }
          onLabelClicked = { handleTermClicked }
          />
                
        <GifList robots = {robots} />
    </>
  )
}
