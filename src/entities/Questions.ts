import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity("single-question")
export class Questions extends BaseEntity {

        @PrimaryGeneratedColumn()
        id!: number;
    
        @Column("text")
        question!: string;

        @Column({
                length:100
        })
        difficulty!: string;
    
}