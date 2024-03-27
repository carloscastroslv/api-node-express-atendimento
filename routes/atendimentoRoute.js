const { Router } = require('express');
const router = Router();

// get 

router.get('/atendimentos', (req, res) => {
    res.send("Chegou aqui estamos listando todos os atendimentos");
})

// post
router.post('/atendimento', (req, res) => {
    res.send("Chegou aqui estamos atualizando o atendimento");
})

// put
router.put('/atendimento/:id', (req, res) => {
    const { id } = req.params;
    res.send("Chegou aqui estamos criando um novo atendimento ${id} ...");
})

// delete
router.delete('/atendimento/:id', (req, res) => {
    res.send("Chegou aqui estamos deletando um atendimento");
})

module.exports = router;