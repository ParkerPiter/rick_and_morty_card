import s from'./App.module.css';
import Home from './Pages/Home/Home';
import Nav from './components/Nav/Nav';
import About from './Pages/About/About';
import Detail from './components/Detail/Detail';
import Login from './Pages/Login/Login';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import personajes from './data.js'
import Mostrar from './Pages/Cartas/Mostrar';

function App() {

   //* Funcion de Search
    const onSearch = (id) =>{
      const URL_BASE = "https://rickandmortyapi.com/api/";
      //! Validación para que no se repitan pj
      // if(characters.find((char)=> char.id === id)){
      //    return alert("No se puede repetir personaje")

       fetch(`${URL_BASE}/character/${id}`)
         .then(response=>response.json())
         .then(data=>{
            if(data.name && !characters.find((char)=> char.id === data.id)){
             setCharacters((oldChars)=>[...oldChars, data]);
             // setCharacters([...charaters, data])
            }
            else{
             alert("No hay personaje con ese nombre");
            }
       });
    };

    //* Funcion de Close
    const onClose = (id)=>{
      setCharacters(characters.filter((char) => char.id !== id))
      //! Filter no modifica el array original
    }

   //! HOOKS
    //* Estado
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
    //* Hook para storagelocal
   const [access, setAccess] = useState(false);
  
   //? Credenciales de prueba
   const user = "gabriel.leal.n1@gmail.com";
   const password = "qwerty1!";

   //* Location
   const {pathname} = useLocation(); //* Es un objeto

   //! Funcion Login
   const login = (userData)=>{
      if(userData.user === user && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
      else{
         alert("Credenciales incorrectas")
      }
   }
    //* Usamos este hook para luego de logear cambiar de pagina
    useEffect(()=>{
      !access && navigate("/")
   }, [access])

  

   //!RENDERIZADO
   return (
      <div className={s.app}>
         {pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Login login={login} />}></Route>
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:detailId' element={<Detail />}></Route>
            <Route path='/cartas' element={<Mostrar personajes={personajes}/>}></Route>
         </Routes> 
      </div>
   );
}

export default App;
