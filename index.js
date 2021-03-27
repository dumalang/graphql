import express from 'express';
import graphqlHTTP from 'express-graphql';
import {schema} from './app/schema';

const app = express();
const PORT = 8080;

const {sequelize: db, Awb} = require('./app/models/sql_models');
const s = require('sequelize')

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`GraphQL is running!`)
);

app.get('/awb', async (req, res) => {
    res.send(await Awb.findOne({}));
});

const testLocking = async () => {
    let t = await db.transaction({
        // isolationLevel: s.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED,
        // type: s.Transaction.TYPES.EXCLUSIVE
    })

    // let t2 = await db.transaction({
        // isolationLevel: s.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED,
        // type: s.Transaction.TYPES.EXCLUSIVE
    // })


    try {

        const q1 = await Awb.findOne({
            lock: t.LOCK.UPDATE,
            skipLocked: true,
            transaction: t
        });
        // const q1 = await db.query(
        //     "SELECT `id`, `awb`, `used_at`, `created_at`, `updated_at` FROM `awbs` AS `Awb` LIMIT 1 FOR UPDATE",
        //     {
        //         type: s.QueryTypes.SELECT,
        //         transaction: t
        //     }
        // )
        const awb1 = q1[0];
        console.log(awb1.id);
        const q2 = await Awb.findOne({
            lock: t.LOCK.UPDATE,
            skipLocked: true,
            transaction:t
        });
        // const q2 = await db.query(
        //     "SELECT `id`, `awb`, `used_at`, `created_at`, `updated_at` FROM `awbs` AS `Awb` LIMIT 1 FOR UPDATE SKIP LOCKED",
        //     {
        //         type: s.QueryTypes.SELECT,
        //         transaction: t
        //     }
        // )
        const awb2 = q2[0];
        console.log(awb2.id);

        // awb1.used_at = new Date();
        // await awb1.save({
        //     transaction:t
        // });

        // UPDATE `awbs` SET `used_at`='2021-01-01 00:00:00',`updated_at`= NOW() WHERE `id` = 1234;

        setTimeout(async () => {
            await t.commit()
            // const awb1Clone = awb1.get({ plain: true });
            // const awb2Clone = awb2.get({ plain: true });
            const awb1Clone = awb1;
            const awb2Clone = awb2;
            console.log({awb1Clone, awb2Clone})
        }, 5000);
    } catch (e) {
        console.log(e)
        await t.rollback()
    }
}

// testLocking();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () =>
    console.log(`your server is running on localhost:${PORT}/graphql`)
);
