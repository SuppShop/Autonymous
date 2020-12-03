import { RouterSharp } from '@material-ui/icons';
import { Router } from 'express';

import registerRouter from './register.routes';

import './database';

const routes = Router();

routes.use('/register', registerRouter)

registerRouter.post('/',  (request, response) => {
    return response.json({ message: 'Hello World'});
})

export default routes;