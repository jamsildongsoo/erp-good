import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user; // JwtStrategy의 validate가 반환한 값

    // 특정 필드만 지정해서 가져올 수도 있음 (예: @CurrentUser('companyId'))
    return data ? user?.[data] : user;
  },
);