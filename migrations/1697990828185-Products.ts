import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Products1697990828185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },

                    {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false,
                    },

                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false,
                    },

                    {
                        name: 'price',
                        type: 'int',
                        isNullable: false,
                    },

                    {
                        name: 'isAvaliable',
                        type: 'boolean',
                        isNullable: false,
                        default: false
                    },

                    {
                        name: 'product_image',
                        type: 'varchar',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
