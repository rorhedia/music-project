const client = require( '../helpers/connection' );

class Songs {

    async getAll() {
        return await client.Song.findMany();
    }

    async create( data ) {
        return await client.Song.create( { data } );
    }

    async update( id, data ) {
        return await client.Song.update( {
            where: {
                id
            },
            data
        } )
    }

    async detele( id ) {
        return await client.Song.detele( {
            where: {
                id
            }
        } )
    }

}

module.exports = Songs;