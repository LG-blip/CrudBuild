import { IsString } from "class-validator";
import { createEmployee } from "src/entity/employee.entity";

export class EmployeeDto {
    static fromEntity(employee: createEmployee): any {
        throw new Error('Method not implemented.');
    }

    id: number;

    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsString()
    email: string;

    salary: number;

    @IsString()
    date: string;

    @IsString()
    password: string;
     
}