import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateRegisters1606922488973 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
         new Table({
            name: 'registers',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },

                {
                    name: 'name_user',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'date_register',
                    type: 'timestamp with time zone',
                    isNullable: false
                },

                {
                    name: 'type_user',
                    type: 'integer',
                    isNullable: false
                },

                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                }
            ]
         })
        );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
