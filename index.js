const express = require("express");

const app = express();

app.get("/usuarios", (request, response) => {
    response.json({ usuarios: [] })
});

app.get("/produtos", (request, response) => {
    response.json({ produtos: [] })
});

app.listen(3000, () => {
    console.log("servidor iniciado")
});
