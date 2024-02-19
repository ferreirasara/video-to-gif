import { Controller, Post, UseInterceptors, UploadedFile, Req, BadRequestException } from '@nestjs/common';
import { VideoService } from './video.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import multerConfig from 'src/multerConfig';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  create(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    if (file?.mimetype?.includes('video')) {
      return this.videoService.create(file, req);
    } else {
      throw new BadRequestException(null, { description: "Unsupported file" });
    }
  }
}
