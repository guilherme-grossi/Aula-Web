const express = require("express");

const app = express();

app.get("/usuarios", (request, response) => {
    response.json({ usuarios: usuario })
});

app.get("/produtos", (request, response) => {
    response.json({ produtos: [] })
});

app.post('/usuarios', (request, response) => {
const usuario = {
    nome: "Guilherme",
    sobrenome: "Grossi",
}
usuarios.push(usuario);

response.json({ usuario });
})

app.listen(3000, () => {
    console.log("servidor iniciado")
});
