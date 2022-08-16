import * as common from '@nestjs/common'
import * as graphql from '@nestjs/graphql'
import * as nestAccessControl from 'nest-access-control'

import * as gqlACGuard from '../auth/gqlAC.guard'
import { GqlDefaultAuthGuard } from '../auth/gqlDefaultAuth.guard'

import { User } from './base/User'
import { UserResolverBase } from './base/user.resolver.base'
import { UserService } from './user.service'

@graphql.Resolver(() => User)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserResolver extends UserResolverBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder)
  }
}
