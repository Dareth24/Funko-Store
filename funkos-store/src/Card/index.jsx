import './Card.css';
import Capimg from '../assets/cap-america-funko.jpg';

function Card() {
    return(
        <a>
            <img src={Capimg} alt='imágen del funko'></img>
            <div className='info'>
                <p>price</p>
                <p className='name'>name</p>
            </div>
        </a>
    )
}

export { Card };