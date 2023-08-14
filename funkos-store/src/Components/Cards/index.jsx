import React from 'react';
import { CardsContext } from '../../Hooks/CardsStorage';
import './Card.css';

function Card() {
    const { funkosDisponibles } = React.useContext(CardsContext);
    return(
        <>
        {
            funkosDisponibles.map(pop => (
                <a key={pop.name}>
                    <img src={process.env.PUBLIC_URL + "../popImages/" + pop.img} alt="pop image" />
                    <div className='info'>
                        <p>{pop.price}</p>
                        <p className='name'>{pop.name}</p>
                    </div>
                </a>
            ))
        }
        </>
    )
}

export { Card };