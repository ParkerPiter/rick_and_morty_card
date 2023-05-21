import { useEffect } from 'react';
import s from './About.module.css';

const About = () =>{
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
            <h1 className={s.titulo}>Meet The Geniuses Behind This Project</h1>
            <div className={s.bloque}>
                <div className={s.left}>
                    <h2 className={s.name}>Gabriel Leal</h2>
                    <p className={s.data}>Full Stack Developer</p>
                    <p className={s.data}>Mastermind in practice</p>
                    <p className={s.correo}>gabriel.leal.n1@gmail.com</p>
                </div>
                <div className={s.right}>
                    <h2 className={s.name}>Crismar Chaparro</h2>
                    <p className={s.data}>Graphic Designer</p>
                    <p className={s.data}>Creative mastermind</p>
                    <p className={s.correo}>crismarcm48@gmail.com</p>
                </div>
            </div>
            <div className={s.contenedor}>
                <p className={s.ty}>I want to give a special thanks to Henry for helping me prepare for my Full stack career and to Crismar for trusting me, supporting me and the great designs.</p>
            </div>
        </div>
    );
}

export default About;