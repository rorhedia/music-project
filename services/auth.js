const users  = require( './users' );
const bcrypt = require( 'bcrypt' );
const jwt    = require( 'jsonwebtoken' );

class Auth {

    async login( credentials ) {
        const { email, password } = credentials;
        const userSvc             = new users();
        const user                = await userSvc.getByEmail( email );

        if ( user && await this.compare( password, user.password ) ) {
            delete user.password;
            return {
                logged: true,
                data  : user,
                token : this.createToken( user )
            }
        }

        return {
            logged : false,
            message: 'Credenciales incorrectas, verificar'
        }
    }

    async signup( credentials ) {
        const userSvc        = new users();
        credentials.password = await this.encrypt( credentials.password );
        const user           = await userSvc.create( credentials );

        if ( user ) {
            delete user.password;
            return {
                logged: true,
                data  : user,
                token : this.createToken( user )
            }
        }

        return {
            logged : false,
            message: 'Credenciales incorrectas, verificar'
        }
    }

    createToken( data ) {
        return jwt.sign( data, '12345' );
    }

    async encrypt( text ) {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash( text, salt );
    }

    async compare( text, hash ) {
        return await bcrypt.compare( text, hash );
    }
}

module.exports = Auth;