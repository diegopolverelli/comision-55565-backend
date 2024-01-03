import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import FirstMiddleware from './middlewares/FirstMiddleware';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./src/.env"}),
    // MongooseModule.forRoot('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase44'),
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async(config:ConfigService)=>({
          uri: config.get<string>("MONGO_URL")
        })
      }
    ),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(FirstMiddleware).forRoutes({path:"*", method: RequestMethod.ALL})
  }
 }
