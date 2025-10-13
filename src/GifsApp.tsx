
import { mockGifs } from './mock-data/gifs.mock'
// import { robots } from './mock-data/robots.mocks'

import './index.css'
import { CustomHeader , SearchBar } from './shared/components'
import { GifList, PreviousSearches } from './gifs/components'
// import { CustomHeader } from './shared/components/CustomHeader'
// import { CustomSearch } from './shared/components/CustomSearch'

export const GifsApp = () => {


  return (
    <>
       <CustomHeader title="Mis Gifs" description="Descubre y comparte el GIF perfecto" />

        <SearchBar placeholder="Busca lo que quieras"/>
        
        <PreviousSearches searches={['Goku','Hanamichi','Seiya','Oliver','Naruto','Ippo']} />
                
        <GifList gifs = {mockGifs} />
    </>
  )
}
