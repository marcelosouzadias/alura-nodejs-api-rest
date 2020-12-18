module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("Você esta na roda de atendimento realizando um GET"))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send("Você esta na roda de atendimento realizando um post")
    })
}