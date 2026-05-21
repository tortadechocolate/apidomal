import { v4 as uuid } from 'uuid';
import jogadores from '../data/jogadores.js';

export const listarJogadores = (req, res) => {
  res.status(200).json(jogadores);
};

export const buscarJogador = (req, res) => {
  const jogador = jogadores.find(j => j.id === req.params.id);

  if (!jogador) {
    return res.status(404).json({ mensagem: 'Jogador não encontrado' });
  }

  res.status(200).json(jogador);
};

export const criarJogador = (req, res) => {
  const { nome, posicao, altura, time } = req.body;

  if (!nome || !posicao || !altura || !time) {
    return res.status(400).json({
      mensagem: 'Todos os campos são obrigatórios'
    });
  }

  const novoJogador = {
    id: uuid(),
    nome,
    posicao,
    altura,
    time
  };

  jogadores.push(novoJogador);

  res.status(201).json({
    mensagem: 'Jogador cadastrado com sucesso',
    jogador: novoJogador
  });
};

export const atualizarJogador = (req, res) => {
  const jogador = jogadores.find(j => j.id === req.params.id);

  if (!jogador) {
    return res.status(404).json({ mensagem: 'Jogador não encontrado' });
  }

  const { nome, posicao, altura, time } = req.body;

  jogador.nome = nome || jogador.nome;
  jogador.posicao = posicao || jogador.posicao;
  jogador.altura = altura || jogador.altura;
  jogador.time = time || jogador.time;

  res.status(200).json({
    mensagem: 'Jogador atualizado com sucesso',
    jogador
  });
};

export const deletarJogador = (req, res) => {
  const index = jogadores.findIndex(j => j.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Jogador não encontrado' });
  }

  jogadores.splice(index, 1);

  res.status(200).json({
    mensagem: 'Jogador removido com sucesso'
  });
};