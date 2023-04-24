import Card1 from "../../card1/Card1";
import Footer from "../../footer/Footer"
import NavBar from "../../navbar/Navbar";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Card1 title={"Hola"} text={"hola mundo"} image={"X"}/>
            <Footer />
        </div>
    )
}

export default Home;