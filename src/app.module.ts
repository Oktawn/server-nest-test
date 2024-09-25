import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
import { User } from './entities/user';
import { LikeModule } from './like/like.module';
import { Like } from './entities/like';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
config();

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        // @ts-ignore
        type: process.env.type_db,
        host: process.env.host_db,
        port: parseInt(process.env.port_db, 10),
        username: process.env.user_db,
        password: process.env.pass_db,
        database: process.env.name_db,
        entities: [User, Like],
        synchronize: true
      }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    JwtModule.register({
      secret: process.env.secret_key,
      global: true,

    }),
    LikeModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
