import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { EmployeesModule } from 'src/employees/employees.module';
import { LocalStrategyService } from 'src/local-strategy/local-strategy.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt-strategy/jwt-strategy.service';
import { JwtAuthGuard } from './jwt-auth.guard'; // Import JwtAuthGuard
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService

@Module({
  imports: [
    PassportModule.register({ session: true }),
    EmployeesModule,
    ConfigModule.forRoot(), 
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), 
        signOptions: {
          expiresIn: '1h',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    LocalStrategyService,
    JwtStrategy, 
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard, 
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
