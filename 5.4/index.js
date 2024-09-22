import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "GSU";
const yourPassword = "2024";
const yourAPIKey = "a97bf574-a886-4771-bae0-6311de285fa9";
const yourBearerToken = "4391927a-ca7a-4acd-819e-4e6b97db80b4";

app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
  res.render("index", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "random");
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// app.get("/noAuth", async (req, res) => {
//   try {
//     const result = await axios.get(API_URL + "/random");
//     res.render("index.ejs", { content: JSON.stringify(result.data) });
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
    try {
      const result = await axios.get((API_URL + "all?page=2"), {
        auth: {
          username: "GSU",
          password: "2024"
        }
      });
      res.render("index.ejs", { content: JSON.stringify(result.data)});
    } catch (error) {
      res.status(404).send(error.message);
    }

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  
  try{
    const response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`);
    console.log(response.data)
    res.render("index.ejs", { 
      content: JSON.stringify(response.data),
    });
  } catch(error){
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const result = await axios.get((API_URL + "secrets/42"), {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
