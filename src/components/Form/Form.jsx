import s from './Form.module.css';
import validation from './validation';
import { useState } from "react";

const Form=({login})=>{

    //!Estado Principal
    const [userData, setUserData] = useState({
        user: "",
        password: "",
    });

    //!Estado de Validacion
    const [errors,setErrors]= useState({
        user: "",
        password: "",
    })

    //! Funcion para guardar en el estado lo que se pase al input
    const handleInputChange = (event)=>{
        const property = event.target.name
        const value = event.target.value
    
        setUserData({...userData, [property]: value});
        validation({...userData, [property]: value}, errors, setErrors);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={s.guia}>
            <form className={s.bodyform} onSubmit={submitHandler} >
                <div>
                    <label className={s.title} htmlFor="user" >Username:</label>
                    <input type="text" name="user" className={ `${s.barra} }`} value={userData.user} onChange={handleInputChange}/> 
                    <p>{errors.user}</p>
                </div>
                <div>
                    <label className={s.title} htmlFor="password">Password:</label>
                    <input className={s.barra} type="text" name="password" value={userData.password} onChange={handleInputChange}/> 
                </div>
                <button className={s.boton} type="submit">LOG IN</button>
            </form>
        </div>
    );
}

export default Form;
