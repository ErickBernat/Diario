import {Router} from 'express'
const endpoinst = Router();

import { autenticar } from '../utils/jwt.js';

import BuscarRelatosService from '../service/diario/buscarRelatosService.js';
import inserirNotaService from '../service/diario/inserirNotaService.js';
import deletarNotaService from '../service/diario/deletarNotaService.js';
import alterarNotaService from '../service/diario/alterarNotaService.js';

endpoinst.get('/diario',autenticar, async (req, resp)=>{
  const relatos =  await BuscarRelatosService();
  resp.send({
    relatos
  })
})

endpoinst.post('/diario', autenticar,async(req,resp)=>{
  let nota = req.body;
  const informacao = await inserirNotaService(nota);

  resp.send({
    informacao
  })
})

endpoinst.delete('/diario/:id', autenticar,async(req,resp)=>{
  let id = req.params.id
  let deletado = await deletarNotaService(id)

  resp.send({
    exluida:id
  })
})

endpoinst.put('/diario/:id', autenticar, async (req, resp) => {
      let id = req.params.id;
      let nota = req.body;

      let linhasAfetadas = await alterarNotaService(id, nota);

      resp.send({
          novoId: id
      })

})
export default endpoinst;