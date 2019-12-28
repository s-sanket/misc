// get requriment
express = require("express");
bodyParser = require("body-parser");
myAverageFunction = require("./myAverageFunction");

// get a local variable of express
app = express();

// get bodyParser
app.use( bodyParser.urlencoded( {enabled:false} ) );

// set landing page
app.get( "/", function(req,resp)
{
	resp.sendFile("landingPage2.html",{root:__dirname});
	console.log("Landing page sent to client");
	
});

// logic for calculation
app.post("/calculate", function(req, resp) 
{
	result = myAverageFunction.average( req.body.num1,req.body.num2,req.body.num3 );
	resp.send( "Average of 3 nos is: "+ result );
	console.log("Average of i/p sent to client");
});


// start server
app.listen(8090, function(){
	console.log("Server Up & Running on Port no 8090");
});