import { Module } from '@nestjs/common';
import { VisitsModule } from "./visits-module/visits.module";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    VisitsModule,
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: 'visits',
            module: VisitsModule
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
