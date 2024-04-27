import { Module } from '@nestjs/common';
import { MailService } from './services';
import { MailController, AdminController } from './controllers';

@Module({
  controllers: [AdminController, MailController ],
  providers: [MailService],
})
export class ApiModule {}
