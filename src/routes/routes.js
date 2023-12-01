const router = require('express').Router()



// VERBOS HTTP (4 TIPOS)
// GET - Obter Dados
// POST - Enviar/Receber Dados
// PUT - Atualizar Dados
// DELETE - Remover Dados



router.get('/clientes', (req, res) => {

    res.send({
        ok: 123
    })

})

module.exports = router