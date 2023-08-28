console.log("Hello World Iszwan");

var http = require("http");

//Send the HTTP Header, HTTP Status 200 and the content Type
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});

    //Send the response body as :Hellow
    response.end("Hellow World\n");
}).listen(8081);

console.log("Server running  at http://127.0.0.1:8081/");