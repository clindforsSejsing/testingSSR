
import http from 'http';


//create a server gate 5080

const server = http.createServer((request, response) => {
    response.statusCode = 200;

    //req method and path

    // if(request.method == 'GET' && request.url == "/mimmi"){ 
    //     response.write("Hello Musse Pigg, Mimmi is calling" )
    // }else {
    //     response.statusCode = 405;
    // }
    // response.end();
    // });

    if (request.url == "/musse"){
        response.write("Hello, Musse Pigg"); 
    } else if (request.url == "/kalle"){
        response.write("Hello, Kalle Anka");
    } else {
        response.statusCode = 404;
    }
    response.end();
});



server.listen(5080);