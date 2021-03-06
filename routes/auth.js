const express = require( 'express' );
const Auth    = require( '../services/auth' );

function auth( app ) {
    const router  = express.Router();
    const authSvc = new Auth();

    app.use( '/auth', router );

    router.post( '/login', async ( req, res ) => {
        const user = await authSvc.login( req.body );
        return res.cookie( 'token', user.token, {
            httpOnly: true,
            expires : new Date( new Date().setDate( new Date().getDate() + 1 ) ),
            secure  : false
        } ).json( user );
    } );

    router.post( '/signup', async ( req, res ) => {
        const user = await authSvc.signup( req.body );
        return res.cookie( 'token', user.token, {
            httpOnly: true,
            expires : new Date( new Date().setDate( new Date().getDate() + 1 ) ),
            secure  : false
        } ).json( user );
    } );
}

module.exports = auth;