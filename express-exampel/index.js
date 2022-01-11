import express from "express";
import fs from "fs/promises";

const app = express();

app.get('/', async (request, response) => {
    const fileBuf = await fs.readFile('index.html');
    // response.header('Content-type', 'text/html');
    response.type('html');
    response.send(fileBuf);
// response.send("jajamensan");
});


//test-exampel
// app.get('/hello', (request, response) =>{
//     response.send('hello hello hello');
// });

// //rout makes it possible on all methods
// app.use('/goodbye', (request, response) => {
// response.send("what are you waiting for?")
// });

// app.use("/hello", (request, response) => {
// response.status(405).end();
// });


app.listen(8000);