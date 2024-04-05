

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const { createEncryptor } = require('simple-encryptor');
mongoose.set('strictQuery', false );
var Schema = mongoose.Schema; 


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

