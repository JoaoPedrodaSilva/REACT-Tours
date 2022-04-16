import React, {useState} from 'react'

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(true)

    return (
        <article className='tour'>
            <img src={image} alt={name} />
            <div className='tour-info'>
                <h4 className='tour-name'>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
            </div>

            <p>
                {readMore ? info : `${info.substring(0, 100)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'read more'}
                </button>
            </p>

            <button onClick={() => removeTour(id)}>Not Interested</button>

        </article>
    )

}

export default Tour