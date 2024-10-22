import 'dotenv/config.js'

import adicionarRotas from './rotas.js'

import express from 'express'
import cors from 'cors'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

adicionarRotas(servidor);

const port = process.env.PORTA
servidor.listen(port, () => console.log('Servidor subiu'));
