import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from './subject/subject.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt.strategy';


const configModule = ConfigModule.forRoot({isGlobal: true });

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });
/**
 * JWT Configurations
 */
const jwtModule = JwtModule.registerAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    secret: configService.get<string>('JWT_SECRET'),
    signOptions: {
      expiresIn: '24h',
    },
  }),
  inject: [ConfigService],
});


/**
 * TypeOrm Configurations
 */
const typeOrmModule = TypeOrmModule.forRootAsync({
  useFactory: async () => ({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    autoLoadEntities: true
  })
})

console.log(typeOrmModule);

@Module({
  imports: [
    configModule,
    passportModule,
    jwtModule,
    typeOrmModule,
    SubjectModule
  ],
  providers: [JwtStrategy, SubjectModule],
  exports: [PassportModule]
})
export class AppModule {}
