const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app  = express();

const schema  = buildSchema(
    `type Query {
        hello: String,
        greet(name: String): String
            
    }`
);

// resolver methods for the schema of graphql
const root = {
    hello: () => {
        return "Hello World";
    },
    greet: ({name}) => {
        return `Hello ${name}`;
    }
}

app.use(express.json());

// graphQL middleware
app.use('/graphQl' , graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

// app.get('/' , (req,res) => {
//     res.status(201).send("hello From replit + node")
// })

app.listen(3000 , () => {
    console.log('Server Running on 3000');
})