import { Module } from '@nestjs/common'

import { UserModuleBase } from './base/user.module.base'
import { UserController } from './user.controller'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
  imports: [UserModuleBase],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
