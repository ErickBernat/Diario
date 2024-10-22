import diario from './controller/diarioController.js'
import login from './controller/loginController.js'

export default function adicionarRotas(servidor){
    servidor.use(diario);
    servidor.use(login);
}