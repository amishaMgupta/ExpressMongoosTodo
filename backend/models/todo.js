const mongoos = require('mongoose');
const todoSchema = new mongoos.Schema({
    task: {
        type: String
    },
    discription: {
        type: String
    }
})
module.exports = mongoos.model("todo", todoSchema,"Todo")