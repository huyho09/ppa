import { Module } from '@nestjs/common';
import { Multer } from 'multer';
import { UploadPictureController } from './upload-picture.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [
        MulterModule.register({
            dest: './uploads'
        })
    ],
    controllers: [UploadPictureController]
})
export class UploadPictureModule {}
