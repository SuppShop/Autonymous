import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('registers')
class Register{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    name: String;
    
    @Column('timestamp with time zone')
    date_register: Date;
    
    @Column('integer')
    type_user: Number;
    
    @Column()
    password: String;

}

export default Register;