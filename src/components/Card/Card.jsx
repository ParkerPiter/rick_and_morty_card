import s from '../Card/Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addFav, removeFav } from '../../redux/action';
import { useState} from 'react';
import { useEffect } from 'react';




function Card({name, species, gender, image, onClose, status, origin, id, addFav, removeFav, myFav}) {
   const [isFav, setIsFav] = useState(false);

   const handleFav = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({name, species, gender, image, onClose, status, origin, id});
      }
   }
   useEffect(() => {
      myFav.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFav]);
   
   return (
            //* Destructuring al objeto para usarlo por partes 
            //! {name, species, gender, origin, image, status, id, onClose}
      
         <div className={s.contenedor}>
            <div className={s.container}>
            <button onClick={()=>onClose(id)} className={s.button}>X</button>
               {
                  isFav ? (<button className={s.fav} onClick={handleFav}>💙</button>):(<button className={s.fav} onClick={handleFav}>🤍</button>)
               }
            </div>
            <div className={s.carta}>
               
               <Link to={`/detail/${id}`} className={s.decoration}>
                  <h2 className={s.info} >Name: {name}</h2>
               </Link>
               <img src={image} alt='' className={s.imagenes}/> 
               <h2 className={s.info} >Status: {status}</h2>
               <h2 className={s.info} >Species: {species}</h2>
               <h2 className={s.info} >Gender: {gender}</h2>
               <h2 className={`${s.info} ${s.origin}`} >Origin: {origin} </h2>
            </div>
         </div>

      
   );
   
}

//* Añade o remueve de favoritos
function mapDispatchToProps(dispatch) {
   return {
      addFav: (character) => { dispatch(addFav(character)); },
      removeFav: (id) => { dispatch(removeFav(id)); }
   };
}

//* Para mantener el estado de los favoritos
const mapStateToProps =(state)=>{
   return{
      myFav: state.myFav,
   }
}

//! Para despechar una accion
export default connect(mapStateToProps, mapDispatchToProps)(Card);