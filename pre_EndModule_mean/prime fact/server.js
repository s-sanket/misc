var http=require("http");
mymodule=require("./prime");
onrequest=function(request,response)
{
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write('Hello');
	response.write(mymodule.prime(6));
	response.write('fact:'+mymodule.factorial(6));
	response.end();
}
http.createServer(onrequest).listen(3000);