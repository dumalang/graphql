import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './app/schema';

const app = express();
const PORT = 8080;

const {Awb} = require('./app/models/sql_models');

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`GraphQL is running!`)
);

app.get('/awb', async (req, res) => {
    const awb1 = await Awb.findAll({lock: true,
        skipLocked: true});
    const awb2 = await Awb.findAll();
    res.send({awb1, awb2})
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () =>
    console.log(`your server is running on localhost:${PORT}/graphql`)
);
