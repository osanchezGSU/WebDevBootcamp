import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();


let Blogs = [];

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index", { Blogs: Blogs });
})

app.post("/", (req, res) => {
    const newBlog = 
        {blogName: req.body["blogName"],
        blog: req.body["blog"]};
    Blogs.push(newBlog);
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})




