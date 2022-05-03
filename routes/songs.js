const express = require( 'express' );
const SongsService = require( '../services/songs' );

function songs( app ) {
    const router = express.Router();
    app.use( '/api/songs', router );

    const songsSvc = new SongsService();

    router.get( '/', async ( req, res ) => {
        const songs = await songsSvc.getAll();
        return res.json( { songs } );
    } )

    router.post( '/', async ( req, res ) => {
        const { body } = req;
        const songs = await songsSvc.create( body );
        return res.json( { songs } );
    } )

    router.put( '/:id', async ( req, res ) => {
        const { id } = req.params;
        const { body } = req;
        const songs = await songsSvc.update( id, body );
        return res.json( { songs } );
    } )

    router.delete( '/:id', async ( req, res ) => {
        const { id } = req.params;
        const songs = await songsSvc.detele(id);
        return res.json( { songs } );
    } )

}

module.exports = songs