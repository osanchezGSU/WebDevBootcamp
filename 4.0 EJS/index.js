import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var isWeekDay = true;
var text = "";
3
switch (new Date().getDay()){
    case 0:
    case 6:
        text = "It's the weekend, it's time to have fun!" 
        break;
    default:
        text = "It's a weekday, it's time to work hard!";
};




app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", {message: text} );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });