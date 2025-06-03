import express from "express";
const app = express();
const PORT= 3000;

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome to My Backend</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #007bff;
        }
    </style>
</head>
<body>
    <h1>🚀 Backend is Live!</h1>
    <p>Your Express server is running and serving HTML!</p>
</body>
</html>
`);
}); 

app.get("/about", (req, res) => {
    res.send(`
        <h2>About This API</h2>
        <p>This API was built by Henney </p>
    `);
});

app.post("/Home", (req, res) => {
    res.sendStatus(201);
});

app.put("/page1", (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});