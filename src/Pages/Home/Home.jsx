
import { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import s from './Home.module.css';

const Home = ({characters, onClose})=>{
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
        <div className={s.container}>
            <div className={s.contenedor}>
                <h2 className={s.saludo}>Type a number in the search bar and press the button on the right "+", try it!</h2>
            </div>
            <Cards characters={characters} onClose={onClose}/>
        </div>
    );
}

export default Home;
