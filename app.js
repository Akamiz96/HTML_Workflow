const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/bienvenida.html");
});

app.get("/bienvenida.html", (req, res) => {
    res.sendFile(__dirname + "/pages/bienvenida.html");
});

app.get("/biografia.html", (req, res) => {
    res.sendFile(__dirname + "/pages/biografia.html");
});

app.get("/experiencialaboral.html", (req, res) => {
    res.sendFile(__dirname + "/pages/experiencialaboral.html");
});

app.get("/interes.html", (req, res) => {
    res.sendFile(__dirname + "/pages/interes.html");
});

app.get("/chat.html", (req, res) => {
    res.sendFile(__dirname + "/pages/chat.html");
});