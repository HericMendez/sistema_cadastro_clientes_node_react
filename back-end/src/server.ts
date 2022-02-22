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
/*
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
*/

app.use(express.json());
app.use(cors());
app.use(routes);



app.listen(8080, ()=> console.log("server running on port 8080"))




