import  Register  from '../models/Register';
import {EntityRepository, getCustomRepository, getRepository, Repository} from 'typeorm';

@EntityRepository(Register)
class RegistersRepository extends Repository<Register>{
    public async findByDate(date_register: Date): Promise<Register | null> {
        const findRegister = await getRepository(Register).findOne({
            where: { date_register }
    }) 
        return findRegister || null;
    }
}

export default RegistersRepository;