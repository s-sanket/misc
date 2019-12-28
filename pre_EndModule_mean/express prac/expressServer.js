// gather requirements
express = require("express");
bodyParser = require("body-parser");
fs = require("fs");
myCalcFunction = require("./myCalcFunction");

// declare a local variable for express
app = express();

// use body parser
app.use( bodyParser.urlencoded( {extended:false} ));

// send the landing html page
app.get( "/", function(req,resp) 
{
	resp.sendFile("landingPage.html", {root:__dirname})
	console.log("Landing HTML page sent to client..");
	
});

// set the direction for method
app.post( "/calculate", function(req,resp)
{
	result = myCalcFunction.addition( req.body.num1, req.body.num2 );
	resp.send( "The addtion is ="+result );
	console.log("Calculated Response sent to client..");
});



app.listen( 8090, function(){
	console.log("Express server is up & running on Port no: 8090")
 });