import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
    <section className='tours'>
        <div>
            <h3 className='title'>{tours.length} Tours Available</h3>
            {tours.map(tour => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            })}
        </div>
    </section>
  )
}

export default Tours