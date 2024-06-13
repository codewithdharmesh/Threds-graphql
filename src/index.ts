import express  from 'express';

import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import axios from 'axios';
import createapolloserver from './graphql/index';


const app = express ();


async function init (){
    const PORT = process.env.PORT || 3000;
    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({message : "server is up and running"});
    })
    
   
    
    app.use(cors());
    app.use('/graphql',expressMiddleware(await createapolloserver()));
    
    app.listen(PORT, () => {
        console.log(`server is running on port  ${PORT}`);
    })
}

init();