import Carta from '../NewCard/Carta.jsx';
import s from '../NewCards/Cartas.module.css'

//!Debemos traer los personajes de characters que son exportados
function Cartas({personajes, onClose}) {
   // const {characters} = props;
   return( 
        <div className={s.contenedor}>
            {
                personajes.map(({name, species, gender, image, status, origin, id}) =>{
                return(
                    <Carta
                        key = {id}
                        id = {id}
                        name = {name}
                        status = {status}
                        species = {species}
                        gender = {gender}
                        origin = {origin.name}
                        image = {image}
                        onClose = {onClose}
                    /> 
                );
                })
            }
      </div>
   );
}
export default Cartas