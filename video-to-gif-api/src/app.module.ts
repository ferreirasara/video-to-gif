import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { GifModule } from './gif/gif.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(config), GifModule, AuthModule, ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
