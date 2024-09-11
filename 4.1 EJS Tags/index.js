import express, { application } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em> This some em text </em>",
    };
    res.render((__dirname + "/views/index.ejs"), data);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})