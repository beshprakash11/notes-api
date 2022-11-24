const express = require('express');
const fs = require('fs');

require('./db/mongoose');

const Note = require('./models/note');

//initialize the express
const app = express();

app.use(express.json())

// Defining the custom port i.e. 3000 ... 9999
const port = process.env.Port || 3000;
app.listen(port, () => {
    console.log("Server is up on port " + port);
})

// CRUD APP Stands for Create, Read, Update, Delete
// Crate data to notes mongoDB
app.post('/notes', async(req,res) =>{
    const note = new Note(req.body);
    try{
        await note.save()
        res.status(201).send(note)
    }catch (err){
        res.status(400).send(err)
    }
})

//Read data from the mongoDB
app.get('/notes', async(req, res) =>{
    try {
        const notes = await Note.find({})
        res.send(notes)
    } catch (err) {
        res.status(500).send(err)
    }
    
})