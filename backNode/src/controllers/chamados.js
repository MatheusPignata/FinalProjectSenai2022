const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;
    const chamado = await prisma.chamados.create({
        data: data
    });
    return res.status(201).json(chamado).end();
}

const read = async (req, res) => {
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const chamado = await prisma.chamados.findUnique({
            where: {
                id_chamado: id
            }
        });
        return res.json(chamado);
    } else {
        const chamado = await prisma.chamados.findMany();
        return res.json(chamado);
    }
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let chamado = await prisma.chamados.update({
            data: data,
            where: {
                id_chamado: parseInt(req.body.id)
            }
        });
        res.status(202).json(chamado).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let chamado = await prisma.chamados.delete({
            where: {
                id_chamado: parseInt(req.params.id)
            }
        });
        res.status(204).json(chamado).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

module.exports = {
    read,
    create,
    update,
    del
};