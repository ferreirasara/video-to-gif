import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Gif } from './entities/gif.entity';
import { Request } from 'express';
import fs from 'fs';
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

    return await this.gifRepository.save({
      name: filename,
      destination,
      userId,
      createdAt: new Date(),
      size: bytesWritten,
    });
  }

  async convertBufferToGif(filePath: string, destination: string) {
    return new Promise<number>((resolve, reject) => {
      const outputStream = fs.createWriteStream(destination);
      ffmpeg(filePath)
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

  async findAllByUserId(userId: string) {
    return this.gifRepository.findBy({ userId })
  }
}