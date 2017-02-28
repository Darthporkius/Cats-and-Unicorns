const express = require( 'express' )

const app = express()

app.get( '/', function (req, res) {
	res.send('cats and unicorns')
})





app.listen(3000, function (){
	console.log('We got cats and unicorns!!')
})