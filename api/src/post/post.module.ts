import { Module } from '@nestjs/common'

import { PostModuleBase } from './base/post.module.base'
import { PostController } from './post.controller'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'

@Module({
  imports: [PostModuleBase],
  controllers: [PostController],
  providers: [PostService, PostResolver],
  exports: [PostService],
})
export class PostModule {}
