import FacebookLogo from '../../assets/icons/facebook.png';
import InstagramLogo from '../../assets/icons/logotipo-de-instagram.png';
import TwitterLogo from '../../assets/icons/gorjeo.png';
import './SocialMedia.css';

function SocialMedia() {
    return(
        <section className="social-media">
            <a href="#">
                <img src={InstagramLogo} alt="Logo de instagram"></img>
            </a>
            <a href="#">
                <img src={TwitterLogo} alt="Logo de X"></img>
            </a>
            <a href="#">
                <img src={FacebookLogo} alt="Logo de Facebook"></img>
            </a>
        </section>
    )
}

export { SocialMedia };