import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

const URL = "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/";

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render(__dirname+"/views/index.ejs")
})

app.post("/", async (req, res) =>{
    try{

        const response = await axios.get(URL + req.body.birthDate.split('-').join('/'));
        res.render("index.ejs", {
            celebrations: response.data.celebrations,
        })  

       
    } catch(error){
        console.error("Error message: ", error.message)
    }

})

app.listen(port, () => {
    console.log("Listening to port: ", port);
})