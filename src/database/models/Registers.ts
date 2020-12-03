import { uuid } from 'uuidv4';

import { Entity } from 'typeorm';

@Entity('registers')
class Register{
    id: string;
    name: string;
    dateRegister: Date;
    typeUser: Number;
    password: String;

    constructor({ name, dateRegister, typeUser, password}): Omit<Register, 'id'>){
        this.id = uuid();
        this.name = name;
        this.dateRegister = dateRegister;
        this.typeUser = typeUser;
        this.password = password;
    }
}

export default Register;