const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose')

const bodyParser = require('body-parser')


const {List, Task} = require('./db/models')
 

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
    List.find({} ).then((lists) => {
        res.send(lists);
    })
})


app.post('/lists', (req, res) => {
    // adicionar aquivos   
    /// https://www.youtube.com/watch?v=P3R-8jj3S7U&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd&index=4
    /// 15:44 / 34:25


    let title = req.body.title;

    let newList = new List({
        title
    }); 
    newList.save().then((listDoc) => {
        res.send(listDoc)
    })


})

app.patch('/lists/:id', (req, res) => {
    //modificar lista


})

app.delete('/lists/:id', (req, res) => {
    //deletar uma lista 
})


app.listen(3000, () => {
    console.log("Server listening on port 3000")
})