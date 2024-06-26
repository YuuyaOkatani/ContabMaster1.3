const mongoose = require('mongoose');
const ListSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true,
        minlength:1, 
        trim: true
    },
    _listId:{
        type:mongoose.Types.ObjectId,
        required: true
    }
})


const Task = mongoose.Model('Task' , ListSchema);
module.exports = {Task}