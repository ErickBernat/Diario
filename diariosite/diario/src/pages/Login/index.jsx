import './index.scss'
import axios from 'axios';
import BotaoComponente from '../../components/botao'

import { useState } from 'react';

import {useNavigate} from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function Logar() {
        try{
            let body = {
                "email":email,
                "senha":senha
            }
            let resp = await axios.post('http://localhost:3010/login', body);
            localStorage.setItem('TOKEN', resp.data.token);
            
            navigate('/diario');

        }catch(err){
            alert(err.response.data.erro);
        }
    }
   

    return(
        <div className='login-page'>
            <h1 className='titulo'>DIARIO WEB</h1>
            <div className='login'>
                <h1>Login</h1>
                <form className='form'>
                    <div>
                        <label>Email : </label>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                   <div>
                        <label>Senha : </label>
                        <input type='password' value={senha} onChange={e=> setSenha(e.target.value)}/>
                   </div>
                   
                </form>
                <button onClick={Logar}>LOGAR</button>
            
            </div>
           
        </div>
    );
}