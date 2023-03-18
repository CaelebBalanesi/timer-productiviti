"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("./postController");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.postController = new postController_1.PostController();
        this.routes();
    }
    configuration() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
        this.app.use('/api/posts/', this.postController.router);
        this.app.get('/', (req, res) => {
            res.send('hello world');
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server running on port ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
