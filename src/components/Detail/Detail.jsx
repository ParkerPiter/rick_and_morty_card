<<<<<<< HEAD
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from './Detail.module.css'


// useParams

// useEffect

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
                    <h2 className={s.info} >{character.name}</h2>
                    <h2 className={s.info} >{character.status}</h2>
                    <h2 className={s.info} >{character.gender}</h2>
                    <h2 className={s.info} >{character.species}</h2>
                    <h2 className={s.info} >{character.origin.name}</h2>
                    <img src={character.image} className={s.image}/>
                </>)
                : setTimeout(()=>{
                    <h3>Loading...</h3>
                },5000)
            }
        </div>

    );
}
=======
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from './Detail.module.css'


// useParams

// useEffect

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
                    <h2>{character.name}</h2>
                    <h2>{character.status}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.species}</h2>
                    <h2>{character.origin.name}</h2>
                    <img src={character.image}/>
                </>)
                : setTimeout(()=>{
                    <h3>Loading...</h3>
                },5000)
            }
        </div>

    );
}
>>>>>>> 9eca36f19ffdb6939d0c44bf7b97e3ec2bd0ac85
export default Detail