import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { GifModule } from './gif/gif.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(config), GifModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
