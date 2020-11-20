const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const schema = require('./database/graphql/schema');

const app = express();

require('dotenv').config();

const server = new ApolloServer({
	typeDefs: schema.typeDefs,
	resolvers: schema.resolvers
});

server.applyMiddleware({ app });

app.get('/api/here', (req, res) => {

});

app.listen(process.env.GD_API_SERVER_PORT);
console.log('Server started on port ' + process.env.GD_API_SERVER_PORT);