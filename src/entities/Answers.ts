import {Entity, Column, PrimaryGeneratedColumn, BaseEntity,PrimaryColumn} from "typeorm";

@Entity("all_answers")
export class Answers extends BaseEntity {

        @PrimaryGeneratedColumn() 
        id!: number;
    
        @Column()
        firstAnswer!: string;
    
        @Column()
        secondAnswer!: string;

        @Column()
        thirdAnswer!: string;

        @Column()
        fourthAnswer!: string;
        @Column()
        question!: string;
}
