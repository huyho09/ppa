import { Injectable } from '@nestjs/common';
import { EmployeesService } from 'src/employees/employees.service';

import * as bcrypt from 'bcryptjs'
import { access } from 'fs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly employeeService: EmployeesService,
        private readonly JwtService: JwtService
    ){}

    async validate(email:string, password:string): Promise<any>
    {
        const employee = await this.employeeService.findOnebyEmail(email);
        if (employee && await bcrypt.compare(password, (await employee).password))
        {
            const {password,...result} = employee
            return result
        }
        return null
    }
    async login(user: any)
    {
        const payload = {
            email: user.email,
            sub: {
                id: user.id,
                avatar: user.avatar,
                firstname: user.firstname,
                lastname: user.lastname,
                skills: user.skills,
                role: user.role,
                is_admin: user.is_admin
            }
        }
        return {
            access_token: this.JwtService.sign(payload)
        }
    }
}
