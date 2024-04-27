import { Controller, Get } from "@nestjs/common";


@Controller({ host: 'admin.com', path: 'admin' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}