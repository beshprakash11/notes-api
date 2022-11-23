const express = require('express');
const fs = require('fs')

//initialize the express
const app = express();

//notes api
app.get('/notes', (request, result) =>{
    fs.readFile(__dirname + '/' + 'notes.json', 'utf-8', (err, data) =>{
        if(err){
            console.log(err)
        }
        result.send(data)
    })
})

app.listen(3000, () => {
    // Port define in 3000
    console.log("Server is up on port 3000")
})