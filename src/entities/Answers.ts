import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, JoinTable} from "typeorm";
import {Questions} from './Questions'

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

    
        @ManyToOne(type => Questions, question => question.id)
        @JoinColumn()
 question!: Questions;
        
}

