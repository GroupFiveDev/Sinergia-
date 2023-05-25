import Card1 from "../../card1/Card1";
import Card2 from "../../card2/Card2";
import Footer from "../../footer/Footer"
import NavBar from "../../navbar/Navbar";
import img1 from "../../../assets/NOMBRE NUEVO 2.png"
import img2 from "../../../assets/NIMBRE NUEVO 1.png"

const Home = () => {
    let textQuienesSomos = "Un grupo de mujeres de Córdoba Argentina, con capacidades, aptitudes y conocimientos deseando compartir y acompañar a individuos vulnerables con el objetivo de empoderar sus vidas, para que obtengan las herramientas necesarias y puedan autogestionarse. Queremos dar lo mejor de cada una, con la pasión que nos caracteriza, convencidas que se puede a través de la “sinergia”, crear redes, lazos que potencien a otros. Seguras que el beneficio mutuo es el hábito que abre caminos hacia las interacciones genuinas, creativas y totalmente sinérgicas, es que creamos esta ONG, con el objeto de mejorar la calidad de vida de los que necesitan de nosotras. Al hablar de dar un servicio a personas en situación de vulnerabilidad, no se trata solo de hacerlo, sino de hacerlo lo mejor posible, al mismo tiempo que usamos nuestros recursos de la manera más eficiente posible para poder maximizar nuestro alcance e impacto. Es aquí donde destaca la importancia de la calidad de nuestro acompañamiento."
    let text2 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia."
    return (
        <div>
            <NavBar />
            <Card1 title={"¿Quienes Somos?"} text={textQuienesSomos} image={img1}/>
            <Card2 title={"Hola"} text={text2} image={img2}/>
            <Footer />
        </div>
    )
}

export default Home;