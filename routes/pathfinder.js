const express = require( 'express' )

const router = express.Router( )

var path = require('path')

//////This doesn't work//////
// router.get('/file1', function (req,res) {
// 	res.sendFile( __dirname +'/../views/file1.html')
// 	console.log('cats')
// })
	
// router.get('/file2', function (req,res) {
// 	res.sendFile(__dirname + '/../views/file2.html')
// 	console.log('unicorns')
// })
//////////////////////////////


router.get('/file1', function (req,res) {
	res.sendFile()
	console.log('cats')
})
	
router.get('/file2', function (req,res) {
	res.sendFile()
	console.log('unicorns')
})


module.exports = router 