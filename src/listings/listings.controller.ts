import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateListingDto, ListingDto } from './listings.dto';

@Controller('listings')
export class ListingsController {
  @Get()
  findAll(): string {
    return 'this would return all listings';
  }

  @Post()
  create(@Body() createListingDto: CreateListingDto): Promise<ListingDto> {
    return Promise.resolve({
      id: 'test',
      auction_reserve: 1,
      auction_end: '101010',
    });
  }
}
