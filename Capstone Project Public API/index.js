import express from "express";
import axios from "axios";
import boodyParser from "body-parser";
import {fileURLToPath} from "url";
import {dirname} from "path";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

const URL = "http://calapi.inadiutorium.cz/";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render(__dirname+"/views/index.ejs")
})

app.post("/", (req, res) =>{
    console.log(req.body.date);

})

app.listen(port, () => {
    console.log("Listening to port: ", port);
})