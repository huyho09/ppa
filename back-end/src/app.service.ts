import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employees/entities/employee.entity';
import { Role } from './role/entities/role.entity';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async onModuleInit() {
    const employeeCount = await this.employeeRepository.count();
    if (employeeCount === 0) {
      // Insert initial data with UUIDs
      const roleId = uuidv4();
      const employeeId = uuidv4();
      const hashedPassword = '$2b$10$AtwWZHVE6Pw3c/j4RD1CKec2LPYk1hAyNNLsdAEFWFRFOU9.PtdlS'; // Pre-hashed password
      const joinDate = '1644019200000'

      await this.roleRepository.query(
        `INSERT INTO role (id, name, privilege) VALUES ('${roleId}', 'DH', 'SuperAdmin')`
      );

      await this.employeeRepository.query(
        `INSERT INTO employee (id, firstname, lastname, gender, avatar, email, skills, password, roleId, joinDate) VALUES ('${employeeId}', 'John', 'Cena', 'Male', '0c6950a918ee71fd3ad2a2ed45dbf3cc', 'admin@example.com','Angular,Html,CSS','${hashedPassword}', '${roleId}', '${joinDate}')`
      );
    }
  }
}