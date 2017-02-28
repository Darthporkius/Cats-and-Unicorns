const express = require( 'express' )

const app = express()

const routers = require( __dirname + '/routes/pathfinder')

//This will load the index.html form public on load.
app.use( '/', express.static('public'))

//This is what loads on the root.
// app.get( '/', function (req, res) {
// 	//here the static html
// 	res.send('cats and unicorns')
// 	console.log('cats and unicorns')
// })

//use the router module 
app.use( '/potato', routers)


//Run server
app.listen(3000, function (){
	console.log('We got cats and unicorns!!')
})