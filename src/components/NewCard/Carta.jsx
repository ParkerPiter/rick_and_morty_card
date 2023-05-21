import s from './Carta.module.css'
import { Link } from 'react-router-dom';


function Carta({name, species, gender, image, status, origin, id}) {
   
   return (
    <div>
      <div className={s.contenedor}>
        <div className={s.carta}>
            <h2 className={s.info}>Species:{species}</h2>
            <h2 className={s.info}>Gender:{gender}</h2>
            <h2 className={s.info}>Status:{status}</h2>
            <h2 className={`${s.info} ${s.origin}`}>Origin:{origin}</h2>
        </div>
        <img src={image} alt='' className={s.imagenesC} /> 
      </div>
      
    </div>
   );
   
}

export default Carta;