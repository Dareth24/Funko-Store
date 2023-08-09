import LogoImg from '../assets/pop.jpg';
import './Logo.css';

function Logo() {
    return (
        <img className='logo' src={LogoImg} alt='logo de la tienda'></img>
    )
}

export { Logo };