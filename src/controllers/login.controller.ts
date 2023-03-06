import { Request, Response } from 'express';

function renderPage(req: Request, res: Response) {
    res.render('login');
}

export default {
    renderPage,
};
