import cart from '../assets/icons/cart.png';
import './BuyCart.css';

function BuyCart() {
    return (
        <a className='cart-button' href=".">
            <img src= {cart} alt="shopping cart icon" />
        </a>
    )
}

export { BuyCart }