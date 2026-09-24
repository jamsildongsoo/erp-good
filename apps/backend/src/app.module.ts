import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from './user/entities/user.entity.js';
import configuration from './config/configuration.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { AuthModule } from './auth/auth.module.js';
import { JwtStrategy } from './auth/strategies/jwt.strategy.js';

@Module({
  imports: [
    // 1. ConfigModule 전역 등록 및 설정 파일 바인딩
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }), 

    // 2. TypeORM 비동기 설정 (ConfigService를 이용해 .env 값 주입)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        entities: [User],
        synchronize: configService.get<boolean>('database.synchronize'), // 개발 단계 true (운영 환경에서는 false 권장)
        logging: true,
      }),
    }),

    // 3. JWT 전략 등록 (Passport와 연동)
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: {
          expiresIn: configService.get<any>('jwt.expiresIn'),
        },
      }),
    }),
    
    UserModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService,JwtStrategy,],
})
export class AppModule {}
