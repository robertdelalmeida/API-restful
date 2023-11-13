const express = require('express')

const routes = require('./routes/routes')


const app = express()


// habilita o server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }))


// definindo as rotas
app.use('/api', routes)


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))