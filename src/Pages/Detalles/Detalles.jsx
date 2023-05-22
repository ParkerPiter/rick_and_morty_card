import { useEffect } from "react";
import Detail from "../../components/Detail/Detail";
import s from './Detalles.module.css'

const Detalles = () =>{
    useEffect(() => {
        document.body.style.backgroundImage = 'url(\'/wallpaperbetter.com_1920x1080 (1).jpg\')';
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
        <div className={s.contenedor}>
            <Detail></Detail>
        </div>
    );

}

export default Detalles;