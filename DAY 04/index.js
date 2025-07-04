import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT= 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body)
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});