import { Body, Controller, Delete, Get , NotFoundException, Param, Post, Put} from '@nestjs/common';
import { EmployeeDto } from 'src/dto/EmployeeDto';
import { EmployeeService } from './employee.service';
import { createEmployee, deleteEmployee } from 'src/entity/employee.entity';

@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService){}

    @Get()
    findAll(): Promise<createEmployee[]> {
        return this.employeeService.findAll();
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<createEmployee[]> {
    const employee = await this.employeeService.findEmployee(Number(id));
        if (employee.length === 0) {
            throw new NotFoundException(`Employee with id ${id} not found`);
        }
        return employee;
    }

    // the employee in the post and put request refers to the class instance from the entity.
    @Post()
    create(@Body() employee: createEmployee){
        return this.employeeService.createEmployee(employee);
    }

    @Put(':id')
    update(@Param("id") id: number, @Body() employee: createEmployee){
        return this.employeeService.updateEmployee(id, employee);
    }


    @Delete(':id')
    delete(@Param('id') id:number, employee: deleteEmployee){
        return this.employeeService.deleteEmployee(id, employee);
    }

}
