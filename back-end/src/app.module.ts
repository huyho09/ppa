import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PassportModule } from '@nestjs/passport';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';

import { Employee } from './employees/entities/employee.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get<string>('DB_HOST', '127.0.0.1'),
        port: Number(configService.get<number>('DB_PORT', 1433)),
        database: configService.get<string>('DB_NAME', 'webapplication'),
        username: configService.get<string>('DB_USER', 'sa'),
        password: configService.get<string>('DB_PASSWORD', 'Aa123456@'),
        synchronize: configService.get<string>('DB_SYNC') === 'true', // ✅ Fix parsing
        entities: [Employee],
        extra: {
          encrypt: false, // Required for local MSSQL
          trustServerCertificate: true,
          enableArithAbort: true, // ✅ Fix query abort errors
        },
        options: {
          enableArithAbort: true, // ✅ Fix query abort issues
          requestTimeout: 30000, // ✅ Increase timeout for slow connections
        },
        logging: true,
      }),
    }),
    EmployeesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'assets'),
      serveRoot: '/assets',
    }),
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configureSwagger(app: any) {
    const config = new DocumentBuilder()
      .setTitle('Web Application API')
      .setDescription('API documentation for the web application')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
