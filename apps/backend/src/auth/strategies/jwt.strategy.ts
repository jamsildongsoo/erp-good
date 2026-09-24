import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      // 1. 헤더의 Bearer 토큰 추출
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // 2. config.ts에서 중앙화된 jwt.secret 가져오기
      secretOrKey: configService.get<string>('jwt.secret')!,
    });
  }

  // 3. 토큰 검증이 성공하면 자동으로 실행되며, 반환값이 req.user에 담김
  async validate(payload: any) {
    return payload; // { companyId, userId, role, ... }
  }
}