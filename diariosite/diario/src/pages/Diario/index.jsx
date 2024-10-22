import './index.scss'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import BotaoComponente from '../../components/botao'
import NotaComponente from '../../components/nota'
import Overlay from '../../components/Adicionar';
import { useState } from 'react';

export default function Diario(){
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [lista, setLista] = useState([]);

    const openOverlay = () => setIsOverlayVisible(true);
    const closeOverlay = () => setIsOverlayVisible(false);

    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('TOKEN') == undefined || null) {
            navigate('/');
        }
        BuscaNotas()

    }, [lista]);

    function logoff() {
        localStorage.removeItem('TOKEN');
        navigate('/');
    }

    async function BuscaNotas() {
        let token = localStorage.getItem('TOKEN');

        let resp = await axios.get('http://localhost:3010/diario',{
            headers: { 'x-access-token': token }
        });

        setLista(resp.data.relatos)
       
    }

    return(
        <div className='page-diario'>
            <div className='sidebar'>
                <h3>ATALHOS</h3>
                <div className='botoes-atalho'>
                     <button onClick={openOverlay}>adicionar</button>
                        <button onClick={logoff}>logoff</button>
                </div>
                <Overlay isVisible={isOverlayVisible} onClose={closeOverlay}/>
            </div>
            <div className='conteudo'>
            <div className='head'>
                <h1>SUAS NOTAS</h1>
            </div>
            <div className='adicionar-nota'>
            </div>
            <div>
                    {lista.map(item => 
                        <NotaComponente idNota={item.id_nota} titulo={item.ds_titulo} data={item.dt_data} nota={item.dt_nota}/>
                        
                    )
                    }
                    
            </div>
            </div>
           
              
        </div>
    )
}