import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee> 
  ){}  
  private readonly employees = this.employeeRepository.find()
  async ValidatedUser(email:string, password: string ): Promise<any> {
    
  }
}
