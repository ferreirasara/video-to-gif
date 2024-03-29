import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Gif } from './entities/gif.entity';
import { Request } from 'express';
import fs from 'fs';
import { Storage } from '@google-cloud/storage';
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
import ffmpeg from 'fluent-ffmpeg';
ffmpeg.setFfmpegPath(ffmpegPath);

@Injectable()
export class GifService {
  constructor(
    @InjectRepository(Gif)
    private gifRepository: Repository<Gif>,
  ) { }

  async create(file: Express.Multer.File, req: Request) {
    const userId = req.headers?.userid?.toString();
    const filename = `${file.filename?.split('.')?.[0]}.gif`;
    const destination = `${file.destination}/${file.filename?.split('.')?.[0]}.gif`
    const bytesWritten = await this.convertBufferToGif(file.path, destination);

    await this.saveToGoogleCloud(destination, filename)

    return await this.gifRepository.save({
      name: filename,
      destination,
      userId,
      createdAt: new Date(),
      size: bytesWritten,
      url: `https://storage.cloud.google.com/${process.env.STORAGE_BUCKET_NAME}/${filename}`
    });
  }

  async convertBufferToGif(filePath: string, destination: string) {
    return new Promise<number>((resolve, reject) => {
      const outputStream = fs.createWriteStream(destination);
      ffmpeg(filePath)
        .outputOptions('-vf', 'fps=10,scale=160:-1:flags=lanczos')
        .on('end', () => {
          resolve(outputStream?.bytesWritten);
        })
        .on('error', (err) => {
          reject(err);
        })
        .format('gif')
        .pipe(outputStream);
    });
  }

  async saveToGoogleCloud(filePath: string, filename: string) {
    const storage = new Storage({
      keyFilename: process.env.GOOGLE_STORAGE_KEYFILE_NAME,
      projectId: process.env.STORAGE_PROJECT_ID,
    });

    await storage.bucket(process.env.STORAGE_BUCKET_NAME).upload(filePath, { destination: filename });
  }

  async findAllByUserId(userId: string) {
    return (await this.gifRepository.findBy({ userId })).slice().sort((a, b) => new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime())
  }
}