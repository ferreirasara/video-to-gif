import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';
import { Request } from 'express';
import fs from 'fs';
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
import ffmpeg from 'fluent-ffmpeg';
ffmpeg.setFfmpegPath(ffmpegPath);

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) { }

  async create(file: Express.Multer.File, req: Request) {
    const userId = req.headers?.userid?.toString();
    const gifFileName = `${file.destination}/${file.filename?.split('.')?.[0]}.gif`
    await this.convertBufferToGif(file.path, gifFileName);

    return await this.videoRepository.save({ name: gifFileName, userId });
  }

  async convertBufferToGif(filePath: string, gifFileName: string) {
    return new Promise<void>((resolve, reject) => {
      const outputStream = fs.createWriteStream(gifFileName);
      ffmpeg(filePath)
        .on('end', () => {
          resolve();
        })
        .on('error', (err) => {
          reject(err);
        })
        .format('gif')
        .pipe(outputStream);
    });
  }
}