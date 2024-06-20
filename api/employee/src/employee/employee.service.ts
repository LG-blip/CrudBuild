import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDto } from 'src/dto/EmployeeDto';
import { createEmployee, deleteEmployee, updateEmployee } from 'src/entity/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

    employeeList: EmployeeDto[] = [];

    constructor(@InjectRepository(createEmployee) private employeeRepo: Repository<createEmployee>){}

    async findEmployee(employeeId: number){
        const employeeDetails = this.employeeRepo.find({
            where: {
                id: employeeId
            }
        });
        return employeeDetails;
    }

    async findAll(): Promise<createEmployee[]> {
        return this.employeeRepo.find();
    }


    async createEmployee(employee: createEmployee){
        const addEmployee = this.employeeRepo.create(employee);
        return await this.employeeRepo.save(addEmployee);
    }


    async updateEmployee(id: number, employee: updateEmployee){
        return await this.employeeRepo.update(id, employee);
    }


    // deleteEmployee(id:string): EmployeeDto[]{
    //     return this.employeeList.filter(employee => employee.id !== Number(id));
    // }

    async deleteEmployee(id:number, employee: deleteEmployee){
        return await this.employeeRepo.delete(id);
    }

}
