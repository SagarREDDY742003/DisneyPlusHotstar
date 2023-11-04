let express = require('express');
let app = express();
let port = 9122;
let Mongo = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect,getData} = require('./controller/dbcontroller');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send("Hiii From Express")
})

// get all data

app.get('/data', async(req,res) =>{
    let query = {};
    let collection = "movies";
    let output = await getData(collection,query);
    res.send(output)
});

// get all movies

app.get('/movies', async(req,res) =>{
    let query = {category_id: 2};
    let collection = "movies";
    let output = await getData(collection,query);
    res.send(output)
});

// get all shows
app.get('/tv', async(req,res) => {
    let query = {category_id: 1};
    let collection = "movies";
    let output = await getData(collection,query);
    res.send(output);
})

// get all sports

app.get('/sports', async(req,res) => {
    let query = {category_id: 3};
    let collection = "movies";
    let output = await getData(collection,query);
    res.send(output);
})

app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})

