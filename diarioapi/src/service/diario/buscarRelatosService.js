import {listar} from '../../repository/diarioRepository.js';


export default async function BuscarRelatosService(){
   return( await listar())
}

