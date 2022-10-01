const express = require('express');
const bodyParser = require('body-parser');
const body_parser = bodyParser.urlencoded({extended: true})
const app = express();
const getGroceriesRouter = require('./Routes/Groceries')
class Server {
    constructor() {
        this.createConfig();
        this.showRoutes();
        this.startConfig()
    }

    createConfig() {
        app.use(body_parser)
        app.use(express.json())
    }

    showRoutes() {
        // app.get('/', (req, res) => {
        //     res.write('<h1>put your nodejs and mysql project, here</h1>');
        //     res.end()
        // });
        app.use('/', getGroceriesRouter)
    }

    startConfig() {
        app.listen(4000, () => console.log('SERVER IS WORKED ON PORT ', 4000))
    }
}

new Server();