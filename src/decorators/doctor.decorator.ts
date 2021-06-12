import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Doctor = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.doctor;
  },
)