import type { FC } from "react";


interface Props {
    searches: string[];
    onLabelClicked?: (term:string) => void;
}
/**
 * El error ocurre porque cuando onLabelClicked es opcional 
 * (con el ?), TypeScript no puede garantizar que la función 
 * exista cuando se intenta llamar
 */
export const PreviousSearches:FC<Props> = ({searches , onLabelClicked}) => {
  return (    
    <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
            {
              searches.map((term)=> (
                <li 
                  key={term}
                  //Si onLabelClicked existe entonces llamalo
                  onClick={ () => onLabelClicked && onLabelClicked(term)
                  }
                  >{term}</li>
              ))
            }
        </ul>
    </div>
  )
}
