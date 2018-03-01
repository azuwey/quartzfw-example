import { Request, Response } from 'express';

import { ControllerDecorator, GetDecorator } from 'quartzfw';

@ControllerDecorator('cats')
export default class CatsGetController {
	@GetDecorator('/:id')
	private getreq(req: Request, res: Response) {
		res.send(`hello meow`);
	}
}