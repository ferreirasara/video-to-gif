import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';
import { Request } from 'express';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) { }

  async create(file: Express.Multer.File, req: Request) {
    const video = new Video();
    video.name = file.filename;
    video.contentLength = file.size;
    video.contentType = file.mimetype;
    video.url = `${req.protocol}://${req.get('host')}/files/${file.filename}`;

    return await this.videoRepository.save(video);
  }
}