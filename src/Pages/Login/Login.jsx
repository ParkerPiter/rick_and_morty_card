import { useEffect } from "react";
import Form from "../../components/Form/Form";
import s from './Login.module.css';

const Login = ({login})=>{
    useEffect(() => {
        document.body.style.backgroundImage = 'url(\'/src/img/photo_2023-04-28_22-13-56.jpg\')';
        document.body.style.backgroundSize = '50%';
        document.body.style.backgroundPosition = 'right';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundColor = 'black';
        return () => {
            document.body.style.backgroundImage = null;
            document.body.style.backgroundSize = null;
            document.body.style.backgroundPosition = null;
            document.body.style.backgroundRepeat = null;
            document.body.style.backgroundAttachment = null;
            document.body.style.backgroundColor = null;
          
        };
      }, []);
    return (
        <body className={s.contenedor}>
            
                <Form login={login}></Form>

        </body>
    );
}

export default Login;