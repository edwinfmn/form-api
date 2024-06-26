import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guard/auth.guard';

@Module({
    imports: [ UsersModule,
            JwtModule.register({
                global: true,
                secret: jwtConstants.secret,
                signOptions: { expiresIn: '60m' },
            }) ],
    providers: [ {
                    provide: APP_GUARD,
                    useClass: AuthGuard,
                 }, 
                 AuthService, ],
    controllers: [ AuthController ],
    exports: [ AuthService ]
})
export class AuthModule {

}
