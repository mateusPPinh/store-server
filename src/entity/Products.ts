import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("products")
export class Product {

  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column("int")
  price!: number;

  @Column({ default: false })
  isAvaliable!: boolean;

  @Column({ nullable: true })
  product_image!: string;
}
