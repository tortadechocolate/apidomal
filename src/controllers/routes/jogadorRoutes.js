import { Router } from 'express';

import {
  listarJogadores,
  buscarJogador,
  criarJogador,
  atualizarJogador,
  deletarJogador
} from '../controllers/jogadorController.js';

const router = Router();

router.get('/jogadores', listarJogadores);
router.get('/jogadores/:id', buscarJogador);
router.post('/jogadores', criarJogador);
router.put('/jogadores/:id', atualizarJogador);
router.delete('/jogadores/:id', deletarJogador);

export default router;