const queries = {}

const mutations = {
    createUser: async (_: {}, {firstName,lastName,email,password}:{firstName:string,lastName:string,email:string , password : string} ) => {
       
        return false   },
   
}

export const resolvers = {queries, mutations}