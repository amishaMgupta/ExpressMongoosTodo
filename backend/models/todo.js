const mongoos = require('mongoose');
const todoSchema = new mongoos.Schema({
    task: {
        type: String
    },
    description: {
        type: String
    }
})
module.exports = mongoos.model("todo", todoSchema,"Todo")