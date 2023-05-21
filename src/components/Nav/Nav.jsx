import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css";
import { Link } from "react-router-dom";

function Nav(props){
    return(
        <div className={style.contenedor}>
            <div className={style.navcontainer}>
                <Link to='/home' className={`${style.nav}`}>
                    <h1 className={style.boton}>Home</h1>
                </Link>
                <Link to='/about' className={`${style.nav}`}>
                    <h1 className={style.boton}>About</h1>
                </Link>
                <Link to='/cartas' className={`${style.nav}`}>
                    <h1 className={style.botonE}>Special Cards</h1>
                </Link>
            </div>
            <SearchBar className={style.buscador} onSearch={props.onSearch} ></SearchBar>
        </div>
    );
}

export default Nav