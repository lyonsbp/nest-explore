import { Injectable } from '@nestjs/common';
import { CreateListingDto, ListingDto } from './listings.dto';

@Injectable()
export class ListingsService {
  create(CreateListingDto: CreateListingDto): Promise<ListingDto> {
    return Promise.resolve({
      id: 'test',
      auction_reserve: 1,
      auction_end: '101010',
    });
  }
}
