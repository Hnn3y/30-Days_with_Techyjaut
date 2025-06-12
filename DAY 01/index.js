import express from "express";
const app = express();
const port = 3000;
// const path = require('path')

app.get("/", (req,res) => {
    res.send("<h1>Welcome to 30days with Techyjaunt<h1>")
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});