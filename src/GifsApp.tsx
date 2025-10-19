
import { useState } from 'react'

import { CustomHeader , SearchBar } from './shared/components'
import { GifList, PreviousSearches } from './gifs/components'

import { mockGifs } from './mock-data/gifs.mock'
// import { robots } from './mock-data/robots.mocks'

import './gifs/others/ejemplos'

import './index.css'




export const GifsApp = () => {

  const[ previousTerms , setPreviousTerms ] = useState(['dragon ball z']);

  //Comunicación entre componentes
  const handleTermClicked = (term:string) => {
    console.log({ term });
  } 

  // Query a la consulta que la persona escriba
  const handleSearch = ( query : string = '' ) => {

    query = query.trim().toLowerCase();

    if(query.length === 0) return;

    if(previousTerms.includes(query)) return;

    const currentTerms = previousTerms.slice(0,6);
    currentTerms.unshift(query);

    setPreviousTerms( currentTerms )
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
          searches={['Goku','Hanamichi','Seiya','Oliver','Naruto','Ippo']}
          onLabelClicked = { handleTermClicked }
          />
                
        <GifList gifs = {mockGifs} />
    </>
  )
}
