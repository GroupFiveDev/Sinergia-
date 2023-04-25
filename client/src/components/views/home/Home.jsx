import Card1 from "../../card1/Card1";
import Card2 from "../../card2/Card2";
import Footer from "../../footer/Footer"
import NavBar from "../../navbar/Navbar";
import img1 from "../../../assets/NOMBRE NUEVO 2.png"
import img2 from "../../../assets/NIMBRE NUEVO 1.png"

const Home = () => {
    let text1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia."
    let text2 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum fuga, delectus natus sit facilis ipsum dolores nesciunt mollitia porro modi ipsam quia. Sunt atque consectetur quis esse libero iusto officia."
    return (
        <div>
            <NavBar />
            <Card1 title={"text1"} text={text1} image={img1}/>
            <Card2 title={"Hola"} text={text1} image={img2}/>
            <Footer />
        </div>
    )
}

export default Home;