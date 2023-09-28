const express = require('express');
const router = express.Router();

const Usuario = require('./controllers/usuarios');
const Chamado = require('./controllers/chamados');


router.get('/', (req, res) => { return res.json("API Chama respondendo") });

router.post('/cadastrar', Usuario.create);
router.post('/login', Usuario.login);
router.get('/listuser', Usuario.read);
router.get('/listuser/:id', Usuario.read);
router.put('/alterar/:id', Usuario.update);         
router.delete('/deletar/:id', Usuario.del);

router.post('/chamado', Chamado.create);
router.get('/chamado', Chamado.read);
router.get('/chamado/:id', Chamado.read);
router.put('/chamado/:id', Chamado.update);
router.delete('/chamado/:id', Chamado.del);

module.exports = router;