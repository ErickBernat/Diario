import './index.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Adicionar ({ isVisible, onClose}){

    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [atualizou, setAtualizou] = useState(false);

    useEffect(() => {
  
    }, []);
    
    if (!isVisible) return null;

   

    async function FechaSalva() {
        await Salvar()
        setAtualizou(true)
        onClose()
    }

    async function Salvar() {
        let body = {
            "titulo":titulo,
            "data":data,
            "conteudo": conteudo,
            "usuario": 1
          }

        let token = localStorage.getItem('TOKEN');

            await axios.post('http://localhost:3010/diario', body, { headers: { 'x-access-token': token }});
            alert('Nova Nota Salva');
            setData('');
             setTitulo('');
            setConteudo('');
    }


    return (
        <div className="adicionar-page" onClick={onClose}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                <div className='form'>
                <form>
                    <label htmlFor="">Titulo</label>
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
                    <label htmlFor="">Data</label>
                    <input type="date" value={data} onChange={e => setData(e.target.value)} />
                    <label htmlFor="">Conteudo</label>
                    <textarea type='text' value={conteudo} onChange={e => setConteudo(e.target.value)}/>
                </form>
                <button onClick={FechaSalva}>Salvar</button>
                </div>
            </div>
        </div>
    );
};

