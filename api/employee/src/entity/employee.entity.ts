import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import {PartialType} from '@nestjs/mapped-types';

@Entity('employee')
export class createEmployee {
    // this is used because in pgdb it is set as primary key and autoincrement is enabled for new items.
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({unique: true, nullable:false})
    firstname: string;

    @Column({unique: true, nullable:false})
    lastname: string;

    @Column({unique: true, nullable: true})
    email: string;

    @Column({unique: false, nullable: true})
    salary: number;

    @Column({unique: true, nullable:true})
    date: string;

    @Column({unique: true, nullable:true})
    password: string;

     
    @BeforeInsert()
    async hashPassword() {
        bcrypt.hash(this.password, 10);
    }

}

export class updateEmployee extends PartialType(createEmployee){}

export class deleteEmployee extends PartialType(createEmployee){}
