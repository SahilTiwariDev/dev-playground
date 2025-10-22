// console.log("Hello World")

const express = require("express");
const app = express();
const port = 3000;

const style = "flex: 1, alignItems: 'center', justifyContent: 'center'";

app.get("/", (req, res) => {
  // res.send('Hey there. This is the home page.')
  res.send(`<div style="height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center";>
        <h1 class=${style}>Welcome to the home page</h1></div>`);
});
app.get("/login", (req, res) => {
  res.send(`This is the login page.`);
});
app.get("/shop", (req, res) => {
  res.send(`This is the page for shopping`);
});
app.listen(port, () => {
  console.log(`Yeah it's working man. Probably on ${port} port`);
});
