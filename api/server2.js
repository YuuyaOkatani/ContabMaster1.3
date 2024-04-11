

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { createEncryptor } = require('simple-encryptor');

const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});

module.exports = mongoose.m





app.listen(9992, function check(err){
    if(err)
    console.log("Error" + err); 
    else 
    console.log("Started")
}); 


async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/maindata', {
            useNewUrlParser: true,
            useUnifiedTopology: true,

            // Other options...
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
    
}


connectToDatabase();

app.post('/maindata', async (req, res) => {
    try{
        const newCadastro = new userSchema(req.body);
        await newCadastro.save();
        res.status(201).send(newCadastro); 
    } catch(error){
        res.status(400).send(error.message);
    }
})

