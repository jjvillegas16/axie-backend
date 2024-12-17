import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { AxiesModule } from './axies/axies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('db.uri'),
        dbName: configService.get('db.name'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AxiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
