import "reflect-metadata";
import express, {Request, Response} from "express";
import "reflect-metadata";
import "./database";
import { routes } from "./routes";
import cors from "cors"




const app = express();

app.get('/', (req: Request, res: Response )=>{
    res.send("Nothing to see here")
})  

app.use(express.json());
app.use(routes);
app.use(cors);


app.listen(8080, ()=> console.log("server running on port 8080"))




