import express, { Request, Response } from 'express';
import { PostController } from './postController';
class Server {
    private app: express.Application;
    private postController!: PostController;

  constructor() {
    this.app = express();
    this.configuration();
    this.postController = new PostController();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3000);
  }

  public routes() {
    this.app.use('/api/posts/', this.postController.router);
    this.app.get('/', (req: Request, res: Response) => {
      res.send('hello world');
    });
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server running on port ${this.app.get('port')}`);
    });
  }
}

const server = new Server();
server.start();
