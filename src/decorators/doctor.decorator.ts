import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Doctor = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const doctor = request.doctor

    return data? doctor?.[data] : doctor
  },
)