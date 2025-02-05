import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projects/entities/project.entity';
import { DepartmentsModule } from './departments/departments.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { Department } from './departments/entities/department.entity';
import { Customer } from './customers/entities/customer.entity';
import { Employee } from './employees/entities/employee.entity';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path'
import { UploadPictureModule } from './upload-picture/upload-picture.module';


@Module({
  imports: [
    ProjectsModule,
    TypeOrmModule.forRoot({
      type: "mssql",
      host: '127.0.0.1',
      port: 1433,
      database: 'webapplication',
      username: 'sa',
      password: 'Password@123',
      entities: [Project, Department, Customer, Employee],
      synchronize: true,
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
      logging: true,
    }),
    DepartmentsModule,
    CustomersModule,
    EmployeesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..','src','assets'),
      serveRoot: '/assets'
    }),
    UploadPictureModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly appService: AppService) {}

  configureSwagger(app: any) {
    const config = new DocumentBuilder()
      .setTitle('Web Application API')
      .setDescription('API documentation for the web application')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // Swagger UI will be available at /api
  }
}
