import { Router } from 'express';
import registerRouter from './register.routes'

const routes = Router();

routes.use('/registers', registerRouter);

export default routes;