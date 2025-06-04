import express from "express";
import morgan from "morgan";

const app = express();
const PORT= 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send(` <h1>🚀 Backend is Live!</h1>
    <p>Your Express server is running and serving HTML!</p>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});