import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getRepository, getCustomRepository } from 'typeorm';

import RegistersRepository from '../database/repositories/RegistersRepository';
import CreateRegisterService from '../database/services/CreateRegisterService';

const RegistersRouter = Router();



RegistersRouter.get('/', (request, response) => {

   const registersRepository = getCustomRepository(RegistersRepository);

   const registers = getRepository(RegistersRepository).find();

  return response.json(registers);

});

RegistersRouter.post('/', async (request, response) => {
    
  try {
    const { date_register } = request.body;

    const parsedDate = parseISO(date_register);

    const registersRepository = getCustomRepository(RegistersRepository);

    const createRegister = new CreateRegisterService();

    const register = await createRegister.execute({
      date_register: parsedDate
    });

    return response.json(register);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default RegistersRouter;
