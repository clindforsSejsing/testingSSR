import express from 'express';
import fs from "fs/promises";

const app = express();

app.get('/', async (request, response) => {
    const fileBuf = await fs.readFile('./files/index.html');
    response.type('html');
    response.send(fileBuf);
});

//find files even in other maps
app.get('/*', async (request, response) => {
    const fileName = request.path;
    const fileBuf = await fs.readFile(`./files/${fileName}`);
    const type = fileName.split('.')[1];
    response.type(type);
    response.send(fileBuf);
// response.send("jajamensan");
});
// app.use(express.static)
//test-exampel
// app.get('/hello', (request, response) =>{
//     response.send('hello hello hello');
// });

// // //rout makes it possible on all methods
// app.use('/goodbye', (request, response) => {
// response.send("what are you waiting for?")
// });

// app.use("/hello", (request, response) => {
// response.status(405).end();
// });


app.listen(8000);