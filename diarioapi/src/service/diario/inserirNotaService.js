import { registraNota } from "../../repository/diarioRepository.js";

export default async function inserirNotaService(nota) {
    let id = registraNota(nota)
    return id
}