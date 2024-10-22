import './index.scss'

import BotaoComponente from '../../components/botao'
import axios from 'axios';

import { useEffect,useState } from 'react';

import OverlayS from '../../components/Adicionar';
import OverlayA from '../../components/alterar';

export default function NotaComponente(props){
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const openOverlay = () => setIsOverlayVisible(true);
    const closeOverlay = () => setIsOverlayVisible(false);
    useEffect(() => {

    }, [excluir]);

   
    
    async function excluir(id) {
        let token = localStorage.getItem('TOKEN');

        await axios.delete('http://localhost:3010/diario/' + id, {
            headers: { 'x-access-token': token }
        });
        alert("nota "+id+" Excluida")
    }



    return(
             <div className='nota'>
                
                <div>   
                        <h1>{props.titulo}</h1>
                        <h6>{new Date(props.data).toLocaleDateString()}</h6>
                </div>
                <div className='texto'>
                    <h4>{props.nota}</h4>
                </div>
               
                <div className='botoes-nota'>
                <button onClick={() => excluir(props.idNota)}>Excluir</button>
                <button onClick={openOverlay}>Alterar</button>
                <OverlayS isVisible={isOverlayVisible} onClose={closeOverlay}/>
                <OverlayA isVisible={isOverlayVisible} onClose={closeOverlay} props={props}/>
                </div>
            </div>
    )
}