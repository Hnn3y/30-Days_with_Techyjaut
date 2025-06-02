import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>This is the First page youll see, and this for http requests</h1>")
});

app.get("/Contact", (req, res) => {
    res.send("<h1>Contact Me on:</h1><p>Github: https://github.com/Hnn3y </p>")
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})