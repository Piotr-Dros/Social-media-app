import { Request, Response } from 'express';

function renderPage(req: Request, res: Response) {
    res.render('signup');
}
async function signup(req: Request, res: Response) {}

export default {
    renderPage,
    signup,
};
