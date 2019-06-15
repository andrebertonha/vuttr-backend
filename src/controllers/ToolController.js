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
    show(req, res) {
        Tool.find({ queryParam: req.query.tags }).then((result) => {
            const {tag} = req.query;
            const resultado = result.filter( (currElement, index) => {                
                return currElement.tags.includes(tag);
            });
            res.json(resultado);
        }, (err) => {
            res.status(500).json({error: err});
        });
    },

    //remover uma ferramenta por id
    async destroy(req, res) {
        await Tool.findByIdAndRemove(req.params.id);
        return res.send();
    },    
};



