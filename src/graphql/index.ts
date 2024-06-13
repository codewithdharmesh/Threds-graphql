import { ApolloServer } from '@apollo/server';
import { prismaClient } from '../lib/db'; 
import {User } from './user/index';

async function createapolloserver () {
    const server = new ApolloServer({
        typeDefs : `
        type Query {
            ${User.queries}
        }
        type Mutation {
            
            ${User.mutations}
        }
        `,
    resolvers : {
        Query: {
            ...User.resolvers.queries,
        },
       Mutation: {
            ...User.resolvers.mutations,
       }
    },
  });

  await server.start();
  return server;
}


export default createapolloserver;