const express = require('express')
const mongoose = require('mongoose')
const userRoutes  = require('./routes/userRouter')

const app =  express();

app.use(express.json());
app.use('/userGraphQL' , userRoutes);

mongoose.connect('mongodb+srv://yashraj7011:12345@graphqlcrud.z4urhac.mongodb.net/graphqlcrud?retryWrites=true&w=majority')
.then(()=> {
    console.log("DB connection success")
    app.listen(3000 , () => {
        console.log('Server Running on port 3000')
    })
})
.catch(err => {
    console.log(`DB connection failed : ${err}`)
})