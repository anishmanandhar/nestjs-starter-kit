import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: false,
      autoLoadEntities: true,
    }),
    MikroOrmModule.forRoot({
      entities: ['dist/**/*.entity.js'],
      entitiesTs: ['src/**/*.entity.ts'],
      dbName: process.env.MIKRO_ORM_DB_NAME,
      user: process.env.MIKRO_ORM_USER,
      password: process.env.MIKRO_ORM_PASSWORD,
      host: process.env.MIKRO_ORM_HOST,
      port: +process.env.MIKRO_ORM_PORT,
      type: 'postgresql',
      migrations: {
        tableName: 'mikro_orm_migrations',
        path: './src/migrations',
        pattern: /^[\w-]+\d+\.ts$/,
        transactional: true,
        disableForeignKeys: true,
        allOrNothing: true,
        emit: 'ts',
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
