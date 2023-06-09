import { Router, Response, Request } from 'express';
import { PostService } from './post.service';

export class PostController {
	public router: Router;
  public postService: PostService;

	constructor() {
		this.router = Router();
    this.postService = new PostService();
		this.routes();
	}

	public index = async (req: Request, res: Response) => {
		res.send(this.postService.index());
	}

	public create(req: Request, res: Response){
		res.send(this.postService.create());
	}

	public update(req: Request, res: Response){
		res.send(this.postService.update());
	}

	public delete(req: Request, res: Response){
		res.send(this.postService.delete());
	}

	public routes() {
		this.router.get('/', this.index);
		this.router.post('/', this.create);
		this.router.put('/:id', this.update);
		this.router.delete('/:id', this.delete);
	}
}
