import { Contact } from '../Contact';
import {SocialMedia} from '../SocialMedia';
import { Credits } from '../Credits';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <Contact></Contact>
            <SocialMedia></SocialMedia>
            <Credits></Credits>
        </footer> 
    )
}

export { Footer };