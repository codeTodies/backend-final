import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './entities/user.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';


@Module({
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.register({
      global: true,
      secret: 'test',
      signOptions: { expiresIn: '60s' },
    }),],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
