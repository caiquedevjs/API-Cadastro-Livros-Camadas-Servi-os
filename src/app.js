import  Express  from "express";
import { LibraryController } from "./controller/libery.controller.js";
const app = Express();
app.use(Express.json());
const libery_Controller = new LibraryController();


app.post('/cadastrar', libery_Controller.CreateBookController);
app.get('/consulta',libery_Controller.ViewBookCrontoller);

app.listen(3001, ()=>{
    console.log(`Server is running on port`);
})