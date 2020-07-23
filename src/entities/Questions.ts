import {Entity, Column, PrimaryGeneratedColumn, BaseEntity ,JoinColumn, OneToMany} from "typeorm";
import {Answers} from './Answers'

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

        @OneToMany(type => Answers, answers => answers.question) // note: we will create author property in the Photo class below
        
       answers!: Answers[];
    

}