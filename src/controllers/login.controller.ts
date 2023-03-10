import { Request, Response } from 'express';

function renderPage(req: Request, res: Response) {
  res.sendStatus(200);
}

export default {
  renderPage,
};
