import { Controller, Post, UseInterceptors, UploadedFile, Req, NotAcceptableException, Get, Param } from '@nestjs/common';
import { GifService } from './gif.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import multerConfig from 'src/multerConfig';

@Controller()
export class GifController {
  constructor(private readonly gifService: GifService) { }

  @Post('video-to-gif')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  create(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    if (file?.mimetype?.includes('video')) {
      return this.gifService.create(file, req);
    } else {
      throw new NotAcceptableException(null, { description: "Unsupported file" });
    }
  }

  @Get('gif/:userId')
  findAllByUserId(@Param('userId') userId: string) {
    return this.gifService.findAllByUserId(userId);
  }
}
