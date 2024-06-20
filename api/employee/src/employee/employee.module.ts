import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createEmployee } from 'src/entity/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([createEmployee])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {
  
}
