import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

export default function NavBar() {

  const navigate = useNavigate()
  const screenWidth = screen.width
  console.log(screenWidth);

  const handleClick = (route) => {
    navigate(route)
  }

  return (
    <>
      <div className={`flex flex-end ${screenWidth < 1920 ? "hidden" : ""} p-10 gap-2 violet`}>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-vh-10">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">(Icono de la pagina)</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Quienes somos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#" onClick={() => handleClick("/mision-y-vision")}>Mision y vision</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleClick("/nuestros-logros")}>Nuestros logros</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleClick("/responsabilidad-social-empresarial")}>Responsabilidad social empresarial</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleClick("/alianzas-estrategicas")}>Alianzas estratégicas</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleClick("/regimen-tributario-especial")}>Régimen Tributario Especial</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nuestro trabajo
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Áreas de trabajo</a></li>
                  <li><a className="dropdown-item" href="#">Líneas Estratégicas</a></li>
                  <li><a className="dropdown-item" href="#">Asesoría psicojurídica</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sala de prensa</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sala de prensa
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Ley 1</a></li>
                  <li><a className="dropdown-item" href="#">Ley 2</a></li>
                  <li><a className="dropdown-item" href="#">Ley 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Vinculate</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
