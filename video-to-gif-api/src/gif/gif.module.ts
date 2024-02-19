import { Module } from '@nestjs/common';
import { GifService } from './gif.service';
import { GifController } from './gif.controller';
import { Gif } from './entities/gif.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gif])],
  controllers: [GifController],
  providers: [GifService],
})
export class GifModule { }
