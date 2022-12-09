import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Support {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    img: string

}
