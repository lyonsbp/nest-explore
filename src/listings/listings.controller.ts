import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateListingDto, ListingDto } from './listings.dto';
import { ListingsService } from './listings.service';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  findAll(): string {
    return 'this would return all listings';
  }

  @Post()
  create(@Body() createListingDto: CreateListingDto): Promise<ListingDto> {
    return this.listingsService.create(createListingDto);
  }
}
