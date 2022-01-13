import express from 'express';
import fs from "fs/promises";

const app = express();
//route 1
app.get('/', async (request, response) => {
    const fileBuf = await fs.readFile('./files/index.html');
    response.type('html');
    response.send(fileBuf);
});

//route 3--replace name in html when changed in path
app.get('/:name', async (request, response) => {
    const name = request.params.name;
    const fileBuf = await fs.readFile('./files/index.html');
    const content = fileBuf.toString().replace("Musse Pigg", name);
    response.type('html');
    response.send(content);
});

//route 4- replace name in html when changed in querystring (localhost: xx/hello?name=??)
//     app.get('/hello', async (request, response) => {
//     const name = request.query.name;
//     const fileBuf = await fs.readFile('./files/index.html');
//     const content = fileBuf.toString().replace("Musse Pigg", name);
//     response.type('html');
//     response.send(content);
// });


//route 2
// //find files even in other maps
app.get('/*', async (request, response) => {
    try{
        const fileName = request.path;
        const fileBuf = await fs.readFile(`./files/${fileName}`);
        const type = fileName.split('.')[1];
        response.type(type);
        response.send(fileBuf);
    } catch (err){
        response.status(404).end();
    }
});

//route 0
//test-exampel
// app.get('/hello', (request, response) =>{
//     response.send('hello hello hello');
// });

//route 0.1
// // //rout makes it possible on all methods
// app.use('/goodbye', (request, response) => {
// response.send("what are you waiting for?")
// });

// app.use("/hello", (request, response) => {
// response.status(405).end();
// });

//this replace whole route 2, not err handeling
// app.use(express.static('./files'));

app.listen(8000);