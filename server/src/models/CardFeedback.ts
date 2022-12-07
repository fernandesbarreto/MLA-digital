import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class CardFeedback {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    picture: String

    @Column()
    name: string

    @Column()
    company: string

    @Column()
    text: string
}