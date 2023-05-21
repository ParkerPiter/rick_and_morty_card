import { useState } from "react";
import style from "../SearchBar/SearchBar.module.css"

function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value);
   }

   return (
      <div className={style.separador}>
         <input type='search' placeholder="Search..." className={style.buscador} onChange={handleChange}/>
         <button onClick={()=>onSearch(id)} className={style.button}>Add</button>
      </div>
   );
}

export default SearchBar