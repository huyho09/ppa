import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const new_employee = this.employeeRepository.create(createEmployeeDto)
    const salt = await bcrypt.genSalt(10)
    new_employee.password = await bcrypt.hash(new_employee.password, salt)
    return this.employeeRepository.save(new_employee)
  }
  findAll() {
    return this.employeeRepository.find();
  }
  findOne(id: string) {
    return this.employeeRepository.findOneOrFail({where : {id}});
  }
  findOnebyEmail(email: string){
    return this.employeeRepository.findOne({where: {email}})
  }
  async remove(id: string) {
    const result = await this.employeeRepository.delete(id);
    if (result.affected === 0) {
        return { message: "Employee not found", success: false };
    }
    return { message: "Employee deleted successfully", success: true };
    
  }
  async update(updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.findOneOrFail({where: {id : updateEmployeeDto.id}})
    if (!employee)
    {
      console.log("Can't find Employee")
    }  
    Object.assign(employee,updateEmployeeDto)
    return this.employeeRepository.save(employee)

  }
}
