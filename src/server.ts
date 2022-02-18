import "reflect-metadata";
import express, {Request, Response} from "express";
import "reflect-metadata";
import "./database";
import { routes } from "./routes";




const app = express();

app.get('/', (req: Request, res: Response )=>{
    res.send("Rodando")
})  

app.use(express.json());
app.use(routes);


app.listen(3000, ()=> console.log("server running on port 3000"))




