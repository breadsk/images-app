
import { mockGifs } from './mock-data/gifs.mock'
// import { robots } from './mock-data/robots.mocks'

import './index.css'
import { CustomHeader , SearchBar } from './shared/components'
import { PreviousSearches } from './gifs/components'
// import { CustomHeader } from './shared/components/CustomHeader'
// import { CustomSearch } from './shared/components/CustomSearch'

export const GifsApp = () => {


  return (
    <>
       <CustomHeader title="Mis Gifs" description="Descubre y comparte el GIF perfecto" />

        <SearchBar placeholder="Busca lo que quieras"/>
        
        <PreviousSearches />
        

        {/* Gifs */}
        <div className="gifs-container">
            {
                mockGifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} x {gif.height} (1.5mb)
                        </p>
                    </div>
                ))
            }
        </div>
    </>
  )
}
