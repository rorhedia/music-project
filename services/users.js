const client = require( '../helpers/connection' );

class Users {

    async getAll() {
        return await client.User.findMany();
    }

    async getByEmail( email ) {
        return await client.User.findFirst( {
            where: { email }
        } )
    }

    async create( data ) {
        return await client.User.create( { data } );
    }

    async update( userId, data ) {
        const id = Number.parseInt( userId )
        return await client.User.update( {
            where: {
                id
            },
            data
        } )
    }

    async detele( userId ) {
        const id = Number.parseInt( userId )
        return await client.User.detele( {
            where: {
                id
            }
        } )
    }

}

module.exports = Users;