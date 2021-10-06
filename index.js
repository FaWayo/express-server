const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config({path: 'env'})

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(process.env.MONGODB_URI, config)
.then(()=> {(
    console.log('Mongo DB connected successfully'))
})
.catch(err => {
    console.log('Connection unsuccessful', err)
})


const products = [
    {
        id: 1,
        name: "iPhone 13 Pro Max",
        category: "Electronics",
        price: 9900,
        currency: "USD",
        image: "",
        stars: 4,
        review: "This is an amazing product!"
    },

    {
        id: 2,
        name: "Butter Bread",
        category: "Food",
        price: 5,
        currency: "USD",
        image: "",
        stars: 5,
        review: "The best bread I have ever eaten!"
    }
];

const customers = [
    {
        id: 1,
        name:"Fatima Wayo",
        gender: "Female"
    },

    {
        id: 2,
        name:"Dominic Joseph",
        gender: "Male"
    },

    {
        id: 3,
        name:"Mark Atta",
        gender: "Male"
    },
]

app.get('/', function(req, res){
    res.json({message: 'Hello world!'})
})

app.get('/products', (req,res) => {
    res.json(products);
});

app.get('/customers', (req,res) => {
    res.json(customers);
});

app.get('/customers/:customerID', (req,res) => {
    const {customerID} = req.params;
    console.log('The customer id is ${customerID}')
    res.json(customers[customerID - 1]);
});

app.listen(3000, ()=>{
    console.log('app is running')
})

module.exports = app;