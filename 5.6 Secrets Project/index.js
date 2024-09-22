// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


// 2. Create an express app and set the port number.

const app = express();
const port = 3000;
const URL = "https://secrets-api.appbrewery.com/"




// 3. Use the public folder for static files.
app.use(express.static("public"));


// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try{
        const result = await axios.get(URL + "random");
        const username = result.data.username;
        const secret = result.data.secret;  
        res.render((__dirname + "/views/index.ejs"), 
            {
                user: username,
                secret: secret
            }
        );
    } catch(error){
        console.log(error.message)
        res.render
    }
})


// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.



// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log("Listening to port ", port);
})
