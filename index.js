require( 'dotenv' ).config();
const express = require( 'express' );

const songs = require( './routes/songs' );
const auth = require( './routes/auth' );

const app = express();
const port = process.env.PORT;
app.use( express.json() );

// Importación de routers
songs( app );
auth( app );

app.get( '/', ( req, res ) => {
    res.json( { port } )
} );

app.listen( port, () => {
    console.log( `Servidor ejecutandose en el puerto ${ port }` );
} );