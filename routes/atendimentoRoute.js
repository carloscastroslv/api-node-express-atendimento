const { Router } = require('express');
const router = Router();
const atendimentoController = require('../controllers/atendimentoController');
const { error } = require('console');

// get 

router.get('/atendimentos', (req, res) => {
    const listarAtendimentos = atendimentoController.buscar();
    listarAtendimentos
     .then((atendimentos) => res.status(200).json(atendimentos))
     .catch((error) => res.status(400).json(error.message));
    
})

// post
router.post('/atendimento', (req, res) => {
    const novoAtendimento = req.body;
    const atendimento = atendimentoController.criar(novoAtendimento);
    atendimento
    .then(atendimentoCriado => res.status(201).json(atendimentoCriado))
    .catch(error => res.status(400).json(error.message))
})

// put
router.put('/atendimento/:id', (req, res) => {
    const { id } = req.params;
    const atendimentoAtualizado = req.body;
    const atendimento = atendimentoController.atualizar(
        atendimentoAtualizado, 
        id
        );
    atendimento
    .then((resultAtendimentoAtualizado) => 
        res.status(200).json(resultAtendimentoAtualizado)
        )
        .catch((error) => res.status(400).json(error.message));
    
});

// delete
router.delete('/atendimento/:id', (req, res) => {
    const { id } = req.params;
    const atendimento = atendimentoController.deletar(id);
    atendimento
    .then((resultAtendimentoDeletado) => 
        res.status(200).json(resultAtendimentoDeletado)
        )
        .catch((error) => res.status(400).json(error.message));
});

module.exports = router;