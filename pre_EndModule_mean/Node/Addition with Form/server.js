fs=require('fs')
http=require("http");
url=require("url");
query=require("querystring");
//mymodule1=require("./mymodule1");
processdata=function(req,resp)
{
d=url.parse(req.url);
console.log(d);
switch(d.pathname)
{
	case "/":
	resp.writeHead(200,{'Content-type':'text/html'})
	fs.readFile("form1.html",function(error,data)
	{
		if(error)
		{
			console.log("error occured");
			
		}
		else{
			resp.end(data);
		}
	});
	break;
	case "/calculate":
	resp.writeHead(200,{'Content-type':'text/html'})
	data=query.parse(d.query);
	resp.write("data:" +data.num1+" "+data.num2);
	var add = parseInt(data.num1)+parseInt(data.num2);
	resp.end("addition: "+parseInt(add));
	break;
	default:
	resp.writeHead(200,{'Content-type':'text/html'})
	resp.end("<h1> page not found </h1>");
	break;
}
}
http.createServer(processdata).listen(3000);
console.log("server is running at 3000");
	
	
	
	