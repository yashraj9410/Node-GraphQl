const { graphqlHTTP } = require('express-graphql')
const schema  = require('../schemas/userSchema')
const resolvers = require('../controller/userController')

module.exports =  graphqlHTTP ({
    schema:schema,
    rootValue:resolvers,
    graphiql:true
});