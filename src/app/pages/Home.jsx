import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {

 const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/catalog");
        }, 5000); // 3 segundos

        // Limpieza del timeout
        return () => clearTimeout(timer);
    }, [navigate]);


  return (
    <div className='container home' id="home">
      Home 
    </div>
  )
}