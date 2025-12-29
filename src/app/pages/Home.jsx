import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/homeView.css";

export const Home = () => {
  return (

    <div className='containerHome' id="home">
      <div className='containerHome__intro'>
        <h1>Bienvenido a la librería "Relatos de papel"</h1>
        <h3>Redirigiendo en 5 segundos</h3>
        <div className="containerHome__loader"></div>
      </div>
      <button className="containerHome__button--catalog" onClick={ () => navigate(`/catalog}`) }>Acceder al catálogo</button>
    </div>
  )
}