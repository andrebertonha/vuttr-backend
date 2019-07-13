const mongoose = require('mongoose');
const Tool = mongoose.model('Tool');

module.exports = {
    //listar tools
    async index(req, res) {
        const tools = await Tool.find();
        return res.json(tools);
    },

    //cadastrar nova ferramenta
    async store(req, res) {        
        const tool = await Tool.create(req.body);
        return res.json(tool);
    },

    // consulta coleção por tag
    async show(req, res) {        
        const tool = await Tool.find({tags: req.query.tag});
        return res.json(tool);
    },

    //remover uma ferramenta por id
    async destroy(req, res) {
        await Tool.findByIdAndRemove(req.params.id);
        return res.send();
    },
};
