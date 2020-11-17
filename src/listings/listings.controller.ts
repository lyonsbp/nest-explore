import { Controller, Get } from '@nestjs/common';

@Controller('listings')
export class ListingsController {
  @Get()
  findAll(): string {
    return 'this would return all listings';
  }
}
