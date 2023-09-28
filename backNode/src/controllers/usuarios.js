const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;
    const usuario = await prisma.usuarios.create({
        data: data
    });
    return res.status(201).json(usuario).end();
}


const read = async (req, res) => {
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const usuario = await prisma.usuarios.findUnique({
            where: {
                id_usuario: id
            }
        });
        return res.json(usuario);
    } else {
        const usuario = await prisma.usuarios.findMany();
        return res.json(usuario);
    }
}

const login = async (req, res) => {
    
    const usuario = await prisma.usuarios.findMany({
        where: {
            cpf: req.body.cpf, 
            senha: req.body.senha
        }
    });
    
    if(usuario.length > 0){
        return res.json(usuario);
    }else{
        return res.status(404).end();
    }
    
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let usuario = await prisma.usuarios.update({
            data: data,
            where: {
                id_usuario: parseInt(req.params.id)
            }
        });
        res.status(202).json(usuario).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let usuario = await prisma.usuarios.delete({
            where: {
                id_usuario: parseInt(req.params.id)
            }
        });
        res.status(204).json(usuario).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

module.exports = {
    read,
    login,
    create,
    update,
    del
};