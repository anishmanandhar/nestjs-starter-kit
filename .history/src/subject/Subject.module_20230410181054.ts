import { Module } from '@nestjs/common';

@Module({
  controllers: [Subje],
  providers: [UserService],
})
export class UserModule {}