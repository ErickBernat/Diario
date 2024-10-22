import con from "./conection.js";

export async function listar(){
    let comando = `
    select * from nota
    `
   let [resposta] = await con.query(comando);
   
    return resposta;
}

export async function registraNota(nota) {
    let comando = `
    insert into nota(ds_titulo,dt_data,dt_nota,id_login)
     values(?,?,?,?);
    `
    let[resposta] = await con.query(comando,[nota.titulo,nota.data,nota.conteudo,nota.usuario])

    return resposta.insertId
    
}

export async function alterar(id, nota) {
    const comando = `
        update nota
           set ds_titulo = ?,
               dt_data   = ?,
               dt_nota   = ?
          where id_nota    = ?
    `

    let [resposta] = await con.query(comando, [nota.titulo, nota.data, nota.conteudo, id]);
    return resposta.affectedRows;
}

export async function deletaNota(id) {
    let comando = `
    delete from nota where id_nota = ?
    `
    
    let[resposta] = await con.query(comando,[id])
    return resposta
}