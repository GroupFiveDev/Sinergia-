//components
import Card1 from "../../../card1/Card1"
import NavBar from "../../../navbar/Navbar"
import Footer from "../../../footer/Footer"
import Card2 from "../../../card2/Card2"
//images
import sinergizar from "../../../../assets/NIMBRE NUEVO 1.png"
import sinergizar2 from "../../../../assets/NOMBRE NUEVO 2.png"

const MisionYVision = () => {
    const titleMision = "Misión"
    const imageMision = sinergizar
    const textMision = "Trabajar en equipo es nuestra razón de ser, creando sinergia a cada paso, complementando nuestras funciones, potenciando la creatividad para generar mejores resultados, sumando nuestro rendimiento para asegurar el servicio ofrecido. "
    const titleVision = "Visión"
    const imageVision = sinergizar2
    const textVision = "Ganar/ganar, 1+1=3, crear niveles altos de autoconfianza y cooperación para establecer acuerdos que conciban la sinergia que deseamos obtener. Empoderar a las personas para que perciban su fortaleza y trabajen su  independencia para mejorar la calidad de vida en la que se encuentran y que puedan hacer cambios positivos."
    return(
        <div>
            <NavBar/>
            <Card1 title={titleMision} image={imageMision} text={textMision}/>
            <Card2 title={titleVision} image={imageVision} text={textVision}/>
            <Footer/>
        </div>
    )
}

export default MisionYVision;