import { Module } from '@nestjs/common';
import { VisitsModule } from "./visits-module/visits.module";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { getConnectionOptions } from 'typeorm';
import { UsersModule } from './users-module/users.module';
import { AuthModule } from './auth-module/auth.module';
import { SalonsModule } from './salons-module/salons.module';

@Module({
  imports: [
    VisitsModule,
    SalonsModule,
    AuthModule,
    UsersModule,
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: 'visits',
            module: VisitsModule
          },
          {
            path: 'salons',
            module: SalonsModule
          },
          {
            path: 'users',
            module: UsersModule
          },
          {
            path: 'auth',
            module: AuthModule
          }
        ]
      },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          database: process.env.DB_PATH,
          autoLoadEntities: true
        }),
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
