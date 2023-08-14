import { Logo } from "../Logo";
import { SearchBar } from '../SearchBar';
import { BuyCart } from "../BuyCart";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Logo></Logo>
            <SearchBar></SearchBar>
            <BuyCart></BuyCart>
            <h1>Tu tienda Geek de confianza</h1>
        </header>
        
    )
}

export { Header };