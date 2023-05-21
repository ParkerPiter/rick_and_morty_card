import { useEffect } from "react";
import Cartas from "../../components/NewCards/Cartas";
import s from './Mostrar.module.css'

const Mostrar = ({personajes}) =>{
    useEffect(() => {
        document.body.style.backgroundImage = 'url(\'/src/img/wallpaperbetter.com_1920x1080 (1).jpg\')';
        document.body.style.backgroundSize = '100%';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        return () => {
            document.body.style.backgroundImage = null;
            document.body.style.backgroundSize = null;
            document.body.style.backgroundPosition = null;
            document.body.style.backgroundRepeat = null;
            document.body.style.backgroundAttachment = null;
        };
      }, []);
    return(
        <div>
            <div className={s.contenedor}>
                <h2 className={s.saludo}>These special cards were designed by Crismar Chaparro</h2>
            </div>
            <Cartas personajes={personajes}/>
        </div>
    );

}

export default Mostrar;