import { Module, Scope } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { ServeStaticModule } from '@nestjs/serve-static'
import { MorganInterceptor, MorganModule } from 'nest-morgan'

import { ACLModule } from './auth/acl.module'
import { AuthModule } from './auth/auth.module'
import { HealthModule } from './health/health.module'
import { PostModule } from './post/post.module'
import { SecretsManagerModule } from './providers/secrets/secretsManager.module'
import { ServeStaticOptionsService } from './serveStaticOptions.service'
import { UserModule } from './user/user.module'

@Module({
  controllers: [],
  imports: [
    UserModule,
    PostModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get('GRAPHQL_PLAYGROUND')
        const introspection = configService.get('GRAPHQL_INTROSPECTION')
        return {
          autoSchemaFile: 'schema.graphql',
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        }
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
