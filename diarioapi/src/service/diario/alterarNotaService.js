import { alterar } from "../../repository/diarioRepository.js";

export default async function alterarNotaService(id, nota) {

    let linhasAfetadas = await alterar(id, nota);
    return linhasAfetadas;
}
