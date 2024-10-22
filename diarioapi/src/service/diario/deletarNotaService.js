import { deletaNota } from "../../repository/diarioRepository.js";

export default async function(id){
    let deletado = await deletaNota(id)
    return deletado
}