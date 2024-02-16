import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { VideoModule } from './video/video.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(config), VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
