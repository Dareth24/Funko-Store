import Logo from '../../assets/pop.jpg';
import './Contact.css'

function Contact() {
    return(
        <section className="contact">
            <img className="logo" src= {Logo} alt="logo de la tienda"></img>
            <p>3114960800<br/>fun-kmania@gmail.com <br/>Diagonal 14DE # 15N - 37 <br/>Bucaramanga - Santander </p>
        </section>
    )
}

export { Contact };