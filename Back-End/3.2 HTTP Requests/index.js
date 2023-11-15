import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hello</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<p>+1 781 333 7364</p>")
})

app.get("/about", (req, res) => {
    res.send("<p>nothing about</p>")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})