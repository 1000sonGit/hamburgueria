// importanto o express
const express = require("express")

// Dando um apelido para usar o express
const app = express()

// Criando uma rota
app.get("/users", (request, response) => {
    return response.send("Hello Node")
})

// Atribuindo uma porta para a aplicação
app.listen(3000)