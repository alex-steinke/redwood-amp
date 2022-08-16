import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'

import { PasswordService } from '../auth/password.service'

import { UserServiceBase } from './base/user.service.base'

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService)
  }
}
