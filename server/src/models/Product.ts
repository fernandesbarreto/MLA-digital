import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    subtitle: string

    @Column()
    link: string

}
