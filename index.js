const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor Rodando na porta 3000'))

app.get('/', (req, res) => res.send("Servidor Rodando na porta 3000"))