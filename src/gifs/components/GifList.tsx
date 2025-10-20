import type { FC } from 'react'
import type { robotsProps } from '../../mock-data/robots.mocks'

interface Props {
    robots: robotsProps[]
}

export const GifList:FC<Props> = ({ robots }) => {

  return (
     <div className="gifs-container">
            {
                robots.map((robot) => (
                    <div key={robot.id} className="robot-card">
                        <img src={robot.avatar} alt={robot.name} />
                        <h3>{
                            robot.name
                            }</h3>
                    </div>
                ))
            }
        </div>
  )
}
