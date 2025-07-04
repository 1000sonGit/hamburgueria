// importanto o express
import express from 'express'
import routes from './routes'

class App {
    constructor() {
        // Dando um apelido para usar o express
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        // Usando o express para configurar e usar Json na aplicação
        this.app.use(express.json())
    }

    routes() {
        this.app.use(routes)
    }
}

//exportando
export default new App().app