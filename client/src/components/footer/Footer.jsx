import s from "./Footer.module.css";
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"

const Footer = () => {

    const handleSubmit = () => {
        console.log("Hola")
    }

    return(
        <div className={s.container}>
            <div className={s.contacto}>
                <h6>CONTACTO:</h6>
                <p>correo@correo.com</p>
                <p>correo@correo.com</p>
                <h6>LINEAS DE ATENCIÓN:</h6>
                <p>111-2222333</p>
                <p>111-2222333</p>
            </div>
            <div className={s.redes}>
                <div>
                    <h6>REDES:</h6>
                </div>
                <div className={s.bolitas}>
                    <BsFacebook/>
                    <BsInstagram/>
                    <BsTwitter/>
                    <BsYoutube/>
                </div>
            </div>
            <div className={s.newsletter}>
                <h6>NEWSLETTER</h6>
                <form className={s.form} onSubmit={handleSubmit}>
                    <p>¡No te pierdas nada de Sinergia! Suscríbete a nuestro newsletter. </p>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="name" />
                    <br />
                    <label htmlFor="">Dirección de correo electrónico:</label>
                    <input type="email" name="email" />
                    <br />
                    <button type="submit">Suscribirse</button>
                </form>
            </div>
        </div>
    )
}
 
export default Footer;