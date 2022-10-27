// - Middleware para proteger rutas - //

//- 1.- revisar si existe un token
//- 2.- verificar si el token pertenece a un usuario valido
//- 3.- modificar el REQ y agregar req.user con la informacion desencriptada del token
const { jwtSecret } = require('../config')
const { getUserById } = require('../users/users.controllers')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt


// - exportando una funcion anonima - //
module.exports = (passport)=> {
    const options= {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
        
    }
    passport.use(
        new JwtStrategy(options, async (decoded, done)=> {
            try {
                const response = await getUserById(decoded.id)
                if(!response){
                    return done(null, false)
                }
                console.log('decoded JWT', decoded)
                return done(null, decoded)
            } catch (error) {
                return done(error, false)                
            }
        })
    )

}

