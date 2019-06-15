const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
    
    title: {
        type: String,
        require: true,
    },

    link: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },

    tags: {
        type: Array,
        require: true,
    },

});

mongoose.model('Tool', ToolSchema);