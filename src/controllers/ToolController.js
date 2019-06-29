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
    /* async show(req, res) {        
        await Tool.find({ tag: req.params.tags }).then((result) => {
            let {tag} = req.query;
            const resultado = result.filter( (currElement) => {
                return currElement.tags.includes(tag);
            });
            res.json(resultado);
        }, (err) => {
            res.status(500).json({error: err});
        });
    }, */

    async show(req, res) {
        const query = req.query
        console.log(query)
        await Tool.find(query)
            .then(tools => { 
                res.json({ data: tools })
            })
    },

   

    //remover uma ferramenta por id
    async destroy(req, res) {
        await Tool.findByIdAndRemove(req.params.id);
        return res.send();
    },
};



