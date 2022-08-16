import * as common from '@nestjs/common'
import * as graphql from '@nestjs/graphql'
import * as nestAccessControl from 'nest-access-control'

import * as gqlACGuard from '../auth/gqlAC.guard'
import { GqlDefaultAuthGuard } from '../auth/gqlDefaultAuth.guard'

import { Post } from './base/Post'
import { PostResolverBase } from './base/post.resolver.base'
import { PostService } from './post.service'

@graphql.Resolver(() => Post)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PostResolver extends PostResolverBase {
  constructor(
    protected readonly service: PostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder)
  }
}
