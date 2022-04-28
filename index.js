const express = require( 'express' );
require( 'dotenv' ).config();

const app = express();
const port = process.env.PORT;

app.get( '/', ( req, res ) => {
    res.json( { port } )
} );

app.listen( port, () => {
    console.log( `Servidor ejecutandose en el puerto ${ port }` );
} );