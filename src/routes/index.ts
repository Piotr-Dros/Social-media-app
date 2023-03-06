import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;
