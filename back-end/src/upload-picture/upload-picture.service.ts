import { BadRequestException, Injectable } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as unzipper from 'unzipper';

@Injectable()
export class UploadPictureService {
  async handleFileUpload(file: Express.Multer.File) {
    const filePath = file.path;
    const fileExt = path.extname(file.originalname).toLowerCase();

    if (fileExt === '.zip') {
      const directory = path.join(__dirname, '../../src/assets/slide');
      await fs.promises.mkdir(directory, { recursive: true });

      const extractedFile: string[] = [];

      await fs.createReadStream(filePath)
        .pipe(unzipper.Parse())
        .on('entry', async (entry) => {
          const entryPath = path.join(directory, entry.path);
          console.log("entry Path is ",entryPath)
          if (entry.type === 'File' && /\.(jpg|jpeg|png|gif)$/i.test(entry.path)) {
            await entry.pipe(fs.createWriteStream(entryPath));
            extractedFile.push(entry.path)
          } else {
            entry.autodrain();
          }
        })
        .promise();

      return {
        message: 'Zip file extracted successfully',
        files: extractedFile.map(file => path.basename(file)),
      };
    }


    fs.readFileSync(filePath);
    return {
      message: 'File uploaded successfully',
      filename: file.filename,
    };
  }

  getPicture(filename: string, res: Response) {
    const filepath = path.join(__dirname, '../../src/assets', filename);
    if (fs.existsSync(filepath)) {
      res.setHeader('Content-Type', 'image/jpeg');
      res.sendFile(filepath);
      return;
    } else {
      const filePath = path.join(__dirname, '../../src/assets/slide',filename);
      res.header('Content-Type','image/jpeg')
      res.sendFile(filePath)
      return;
    }
  }

  clearSlides(res: Response){
    const filepath = path.join(__dirname,'../../src/assets/slide')
    if (fs.existsSync(filepath)){
      fs.readdirSync(filepath).forEach(
        (file) => {
          const currentPath = path.join(filepath,file);
          fs.unlinkSync(currentPath);
        }
      )
      res.status(200).send({message: 'slide folder delete successfully'})
    }
    else {
      res.status(400).send({ message: 'Slide folder does not exist' });
    }
  }
}