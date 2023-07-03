
require('dotenv').config()
const express = require('express')

const app = express()
const port = 9000
const env = process.env

const CLIENT_ID = env.CLIENT_ID
const REDIRECT_URL = env.REDIRECT_URL

console.log(env.CLIENT_ID)

// app.method( PATH, HANDLER )

app.get('/', ( req, res ) => {
  const data = {
    name: 'Hello Nataliia',
    isAwesome: true,
  }

  res.json( data )
})

app.get('/awesome-generator', ( req, res ) => {
  const { name, isAwesome } = req.query
  res.send( `${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome` )
})

app.listen( port, () => {
  console.log( `Listening on port ${port}` )
})

app.get('/login', function(req, res) {
  var state = random(16);
  var scope = 'user-read-private user-read-email';
  res.redirect( 'https://accounts.spotify.com/authorize?' +
    querystring.stringify( {
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: scope,
      redirect_uri: process.env.REDIRECT_URL,
      state: state
    } ) )
} )