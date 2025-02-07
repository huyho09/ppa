import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { EmployeesModule } from 'src/employees/employees.module';
import { LocalStrategyService } from 'src/local-strategy/local-strategy.service';
import { JwtModule } from '@nestjs/jwt';
import * as crypto from 'crypto'


const jwtSecretKey = crypto.randomBytes(64).toString('hex')
@Module({
  imports: [PassportModule.register({session: true}),EmployeesModule,
    JwtModule.register({
          secret: jwtSecretKey,
          signOptions: {
            expiresIn: '1h'
          }
        })
  ],
  providers: [AuthService,LocalStrategyService],
  controllers: [AuthController]
})
export class AuthModule {}


