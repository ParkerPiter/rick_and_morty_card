import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from './Detail.module.css'

function Detail(){
    const { detailId } = useParams(); //* Guarda el id
    const [character, setCharacter] = useState({});

    useEffect(()=>{
        const URL_BASE = "https://rickandmortyapi.com/api/";
        axios(`${URL_BASE}/character/${detailId}`)
        .then((response)=>setCharacter(response.data));
    },[]);

    return(

        <div className={s.fondo}>
            { //! Esta sintaxis es de ternario, pregunta si se cumple pasa a algo, sino : pasa a esto
                character.name ?
                (<>
                    <h2 className={s.info} >Name: {character.name}</h2>
                    <img src={character.image} className={s.image}/>
                    <h2 className={s.info} >Status: {character.status}</h2>
                    <h2 className={s.info} >Gender: {character.gender}</h2>
                    <h2 className={s.info} >Species: {character.species}</h2>
                    <h2 className={s.info} >Origin: {character.origin.name}</h2>
                </>)
                : setTimeout(()=>{
                    <h3>Loading...</h3>
                },5000)
            }
        </div>

    );
}

export default Detail
