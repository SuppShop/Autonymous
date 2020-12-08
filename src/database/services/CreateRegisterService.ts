import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Register from '../models/Register';
import RegistersRepository from '../repositories/RegistersRepository';


interface Request {
    date_register: Date;
}

class CreateRegisterService {
  registersRepository: any;

  public async execute({  date_register }: Request): Promise<Register> {
 
    const registersRepository = getCustomRepository(RegistersRepository);

    const registerDate = startOfHour(date_register);

    const findRegisterInSameDate = this.registersRepository.findByDate(
      registerDate,
    );

    if (findRegisterInSameDate) {
      throw Error('This Register is already booked');
    }

      const register = this.registersRepository.create({
        date_register: registerDate
    });

    await registersRepository.save(register);

    return register;
  }
}

export default CreateRegisterService;
